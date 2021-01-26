import { combineReducers } from "@reduxjs/toolkit";
import setting from "modules/commons/setting";

const rootReducer = combineReducers({
  setting: setting.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
