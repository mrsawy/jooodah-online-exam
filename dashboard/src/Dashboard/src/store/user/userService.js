import axios from "axios";
import { api_url } from "./../../utils/base_url";

export const getUsersService = async () => {
  try {
    const response = await axios.get(`${api_url}/users`);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  // return {};
};

export const deleteUserService = async (id) => {
  try {
    const response = await axios.delete(`${api_url}/users`, { data: { userId:id } });
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  // return {};
};
