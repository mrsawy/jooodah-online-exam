/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */

import axios from "axios";
import { api_url } from "../../utils/base_url";

export const createUserService = async (args) => {
  try {
    const response = await axios.post(`${api_url}/user` , args);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
};
