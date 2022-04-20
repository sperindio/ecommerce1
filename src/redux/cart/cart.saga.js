import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

//Clear cart method function
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

//General trigger general functions
export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

//Call of the sagas
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
