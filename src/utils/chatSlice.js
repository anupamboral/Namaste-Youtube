import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(50, 1); //* for removing messages after 20 messages so the dom will not explode because of excessive page size
      state.messages.unshift(action.payload); //* adding messages from front of the array
    },
    emptyMessages: (state, action) => {
      state.messages = [];
    },
  },
});
export const { addMessage, emptyMessages } = chatSlice.actions;
export default chatSlice.reducer;
