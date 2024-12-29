import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isNavOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});
export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
