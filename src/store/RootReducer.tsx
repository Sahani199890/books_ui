import { combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./login/Reducer";
import RegisterReducer from "./register/Reducer";
import { booksReducer } from "./books/Reducer";
import ContactUsReducer from "./contactus/Reducer";

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
  registerReducer: RegisterReducer,
  booksReducer: booksReducer,
  contactUsReducer: ContactUsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
