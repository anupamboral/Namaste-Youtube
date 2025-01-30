import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isNavOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeMenu: (state) => {
      state.isNavOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
