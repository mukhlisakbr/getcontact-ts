import crypto from "./crypto";
import axios from "axios";

export default async (hexUrl: any, data: any, headers: any) => {
  return axios
    .post(crypto.hexToUtf8(hexUrl), { data }, { headers })
    .then((response) => {
      console.log("Response Data:", response.data);
      return response;
    })
    .catch((error) => {
      const errorMessage =
        error.message || "An error occurred during the request.";
      throw new Error(errorMessage);
    });
};
