import { createStore, combineReducers } from "redux";
import userReducer from "./reducer/userReducer";

const mainReducer = combineReducers({
  user: userReducer,
});

const commanData = {
  user: {
    item: [],
  },
};

const store = createStore(mainReducer, commanData);

export default store;
