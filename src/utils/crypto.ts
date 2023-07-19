import cryptoJs from "crypto-js";

const { AES, HmacSHA256, mode, enc } = cryptoJs;

const aesOptions = { mode: mode.ECB };
const encUtf8 = enc.Utf8;
const encHex = enc.Hex;
const encBase64 = enc.Base64;

const cryptoUtils = {
  encrypt: (data: any, finalKey: string = ""): string => {
    const encrypted = AES.encrypt(data, encHex.parse(finalKey), aesOptions);
    return encrypted ? encrypted.toString() : "";
  },

  decrypt: (data: any, finalKey: string = ""): string => {
    const decrypted = AES.decrypt(
      data.toString(),
      encHex.parse(finalKey),
      aesOptions
    );
    return decrypted ? decrypted.toString(encUtf8) : "";
  },

  generateSignature: (
    timestamp: any,
    decryptMessage: any,
    key: string = ""
  ): string => {
    const messageToSign = `${timestamp}-${decryptMessage}`;
    const signature = HmacSHA256(messageToSign, encHex.parse(key))?.toString(
      encBase64
    );
    return signature || "";
  },

  hexToUtf8: (hex: any): string => {
    return encHex.parse(hex).toString(encUtf8);
  },
};

export default cryptoUtils;
