import crypt from "./crypt";
import axios from "axios";

export default async (hexUrl: any, data: any, headers: any) => {
  return axios.post(crypt.hexToUtf8(hexUrl), { data }, { headers });
};
