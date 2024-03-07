/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import { api_url } from "../../utils/base_url";

export const getSiteData = async () => {
  const response = await axios.get(`${api_url}/site`);
  return response.data;
};
export const setSiteData = async (args) => {
  const response = await axios.post(`${api_url}/site`, args);
  return response.data;
};
