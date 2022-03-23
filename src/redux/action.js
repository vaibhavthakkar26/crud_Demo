export const userRegisterData = (data) => {
  return {
    type: "ADD_USER_DATA",
    payload: data,
  };
};

export const editUserData = (id) => {
  return {
    type: "EDIT_USER_DATA",
    payload: id,
  };
};

export const DeleteUser = (id) => {
  return {
    type: "DELETE_USER_DATA",
    payload: id,
  };
};

export const UpdateUser = (data) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: data,
  };
};
