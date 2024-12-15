import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { authReducer } from "./autheReducers";
import { loginReducer } from "./loginReducers";

export const rootReducer = combineReducers({
  products: productReducer,
  users: authReducer,
  login: loginReducer,
});
