import { all } from "redux-saga/effects";
import { loginSaga } from "./login/LoginSaga";
import registerSaga from "./register/RegisterSaga";
import booksSaga from "./books/Saga";
import contactUsSaga from "./contactus/Saga";

function* rootSaga() {
  yield all([registerSaga(), loginSaga(), booksSaga(), contactUsSaga()]);
}

export default rootSaga;
