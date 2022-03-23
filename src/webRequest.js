import axios from "axios";

export const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    if (response.status == "201") {
      const UserData = response.data;
      return UserData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const get = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DELETE = async (id) => {
  try {
    const response = await axios.delete(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const put = async (url, data) => {
  try {
    const response = await axios.put(url, data);
  } catch (error) {
    console.error(error);
  }
};
