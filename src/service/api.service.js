import { ENDPOINTURL } from "../helper";
import { DELETE, get, post, put } from "../webRequest";

// CREATE USER
export const addUser = (data) => {
  return post(`${ENDPOINTURL}/user`, data);
};

// GET USER
export const getUser = () => {
  return get(`${ENDPOINTURL}/user`);
};

// EDIT USER
export const EditUser = (id) => {
  return get(`${ENDPOINTURL}/user/${id}`);
};

// DELETE USER

export const deletUser = (id) => {
  return DELETE(`${ENDPOINTURL}/user/${id}`);
};

// UPDATE USER DATA

export const UPDATEUSER = (id, data) => {
  return put(`${ENDPOINTURL}/user/${id}`, data);
};
