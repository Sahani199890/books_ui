import { call, put, takeEvery } from "redux-saga/effects";
import {
  CONTACTUS_REQUEST,
  CONTACTUS_REQUEST_FAILURE,
  CONTACTUS_REQUEST_SUCCESS,
} from "./ActionType";

function* contactUsAPI(action: any): Generator<any, void, Response> {
  try {
    const response = yield call(fetch, "http://localhost:8080/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    if (response.ok) {
      yield put({ type: CONTACTUS_REQUEST_SUCCESS, payload: response });
    } else {
      yield put({ type: CONTACTUS_REQUEST_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: CONTACTUS_REQUEST_FAILURE, payload: "Error Occurred" });
  }
}

function* contactUsSaga(): Generator {
  yield takeEvery(CONTACTUS_REQUEST, contactUsAPI);
}
export default contactUsSaga;
