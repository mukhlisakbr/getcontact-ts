import crypto from "./crypto";
import axios from "axios";

export default async (hexUrl: any, data: any, headers: any) => {
  return axios.post(crypto.hexToUtf8(hexUrl), { data }, { headers });
};
