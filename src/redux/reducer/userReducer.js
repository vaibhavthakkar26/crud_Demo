const UserReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_USER_DATA":
      return {
        ...state,
        item: [...state.item, action.payload],
      };

    case "DELETE_USER_DATA":
      return {
        ...state,
        item: state.item.filter((user) => user._id !== action.payload),
      };

    case "EDIT_USER_DATA":
      let userDetail = state.item.filter((user) => user._id === action.payload);
      return {
        ...state,
        Edituser: userDetail,
      };

    case "UPDATE_USER_DATA":
      return {
        ...state,
        item: state.item.map((user) =>
          user._id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};

export default UserReducer;
