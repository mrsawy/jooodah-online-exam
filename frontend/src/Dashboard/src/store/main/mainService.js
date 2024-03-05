/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { base_url } from './../../utils/base_url';

export const getMainMessage = async () => {
  try {
    const response = await axios.get(`${base_url}/api/main`);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  return {};
};
export const postMainMessage = async (args) => {
  try {
    const response = await axios.put(`${base_url}/api/main`, { main: args });
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  return {};
};
