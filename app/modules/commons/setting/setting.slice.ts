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
    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
      state.loading = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

const { updateName, setLoading } = setting.actions;

export const namespace = setting.name;
export const actions = { updateName, setLoading };

export default setting.reducer;
