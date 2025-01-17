import cryptoUtils from "./utils/crypto";
import validate from "./utils/validate";
import request from "./utils/request";
import { GetcontactResponse } from "./types";
import { isBase64 } from "./utils/is-base64";
const encryptedEndpoint = `793167597c4a25263656206b5469243e5f416c69385d2f7843716d4d4d5031242a29493846774a2c2a725f59554d2034683f40372b40233c3e2b772d6533565768747470733a2f2f7062737372762d63656e7472616c6576656e74732e636f6d2f76322e382f6e756d6265722d64657461696c`;

class Getcontact {
  token: string;
  finalKey: string;

  constructor(token: string, finalKey: string) {
    this.token = token;
    this.finalKey = finalKey;
  }

  async checkNumber(number: any) {
    try {
      if (!this.token) throw new Error("Token is required!");
      if (!this.finalKey) throw new Error("Final key is required!");

      number = await validate(number);

      const postData = {
        countryCode: "us",
        phoneNumber: number,
        source: "profile",
        token: this.token,
      };

      const timestamp = Date.now().toString();

      const signature = cryptoUtils.generateSignature(
        timestamp,
        JSON.stringify(postData),
        encryptedEndpoint.replace(encryptedEndpoint.substring(128), "")
      );

      const headers = {
        "X-Os": "android 9",
        "X-Mobile-Service": "GMS",
        "X-App-Version": "5.6.2",
        "X-Client-Device-Id": "063579f5e0654a4e",
        "X-Lang": "en_US",
        "X-Token": this.token,
        "X-Req-Timestamp": timestamp,
        "X-Encrypted": "1",
        "X-Network-Country": "us",
        "X-Country-Code": "us",
        "X-Req-Signature": signature,
      };

      const res = await request(
        encryptedEndpoint.substring(128),
        cryptoUtils.encrypt(JSON.stringify(postData), this.finalKey),
        headers
      );

      const decryptedRes: GetcontactResponse = JSON.parse(
        cryptoUtils.decrypt(res?.data?.data, this.finalKey)
      );
      return decryptedRes;
    } catch (error: any) {
      if (error.response) {
        const responseData = error.response.data;
        const isEncryptedData = isBase64(responseData.data);
        if (isEncryptedData) {
          const decryptedData = cryptoUtils.decrypt(
            error.response.data.data,
            this.finalKey
          );
          const parsedData: GetcontactResponse = JSON.parse(decryptedData);
          throw new Error(parsedData.meta.errorMessage);
        } else {
          throw new Error(responseData.meta.errorMessage);
        }
      } else {
        throw new Error(error.message);
      }
    }
  }
}

export default Getcontact;
