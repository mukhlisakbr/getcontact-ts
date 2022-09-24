import cryptoJs from "crypto-js";
const {
  AES,
  HmacSHA256,
  mode: { ECB },
  enc: { Hex, Base64, Utf8 },
} = cryptoJs;

const opt = { mode: ECB };

export default {
  encrypt: (data: any, finalKey = "") =>
    AES.encrypt(data, Hex.parse(finalKey), opt)?.toString(),
  decrypt: (data: { toString: () => any }, finalKey = "") =>
    AES.decrypt(data.toString(), Hex.parse(finalKey), opt)?.toString(Utf8),
  signature: (timestamp: any, decryptMessage: any, key = "") => {
    return HmacSHA256(
      `${timestamp}-${decryptMessage}`,
      Hex.parse(key)
    )?.toString(Base64);
  },
  hexToUtf8: (hex: any) => Hex.parse(hex).toString(Utf8),
};
