import { takeLatest, all, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { actions } from "./setting.slice";

function* updateNameFunc(action: PayloadAction<string>) {
  console.log("tuananhle saga update name: " + action.payload);
  yield put(actions.setLoading(false));
}

export default function* settingSaga() {
  yield all([takeLatest(actions.updateName, updateNameFunc)]);
}
