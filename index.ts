const AWAS_BINTITAN = `793167597c4a25263656206b5469243e5f416c69385d2f7843716d4d4d5031242a29493846774a2c2a725f59554d2034683f40372b40233c3e2b772d6533565768747470733a2f2f7062737372762d63656e7472616c6576656e74732e636f6d2f76322e382f6e756d6265722d64657461696c`;
import crypt from "./utils/crypt";
import validate from "./utils/validate";

class GetContact {
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
      const p = {
        countryCode: "us",
        phoneNumber: number,
        source: "profile",
        token: this.token,
      };

      const ts = Date.now().toString();
      const st = crypt.signature(
        ts,
        JSON.stringify(p),
        AWAS_BINTITAN.replace(AWAS_BINTITAN.substring(128), "")
      );

      const res = await require("./utils/request")(
        AWAS_BINTITAN.substring(128),
        crypt.encrypt(JSON.stringify(p), this.finalKey),
        {
          "X-Os": "android 9",
          "X-Mobile-Service": "GMS",
          "X-App-Version": "5.6.2",
          "X-Client-Device-Id": "063579f5e0654a4e",
          "X-Lang": "en_US",
          "X-Token": this.token,
          "X-Req-Timestamp": ts,
          "X-Encrypted": "1",
          "X-Network-Country": "us",
          "X-Country-Code": "us",
          "X-Req-Signature": st,
        }
      );
      const jsonRes = JSON.parse(crypt.decrypt(res?.data?.data, this.finalKey));
      return {
        number,
        tags: (jsonRes?.result?.tags || []).map((t: { tag: any }) => t.tag),
      };
    } catch (error) {
      const encryptedErr = error?.response?.data?.data;
      const errMsg = encryptedErr
        ? crypt.decrypt(encryptedErr, this.finalKey)
        : error.message || "Something went wrong";
      throw new Error(errMsg);
    }
  }
}

export default GetContact;
