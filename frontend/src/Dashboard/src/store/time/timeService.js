/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { base_url } from './../../utils/base_url';

export const getTimeService = async () => {
  try {
    const response = await axios.get(`${base_url}/api/time`);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  return {};
};
export const setTimeService = async (args) => {
  try {
    const response = await axios.put(`${base_url}/api/time`, { timeRange: args });
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  return {};
};
