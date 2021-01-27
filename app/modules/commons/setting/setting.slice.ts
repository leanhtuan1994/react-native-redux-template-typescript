import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Setting } from "./setting.interfaces";

const initialState: Setting = {
  name: "app",
  loading: false,
};

const setting = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

const { setLoading } = setting.actions;

export const namespace = setting.name;
export const actions = { setLoading };

export default setting.reducer;
