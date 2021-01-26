import { all, fork } from "redux-saga/effects";
import setting from "modules/commons/setting";

export default function* rootSaga() {
  yield all([fork(setting.saga)]);
}
