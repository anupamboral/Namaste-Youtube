import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(20, 1); //* for removing messages after 20 messages so the dom will not explode because of excessive page size
      state.messages.unshift(action.payload); //* adding messages from front of the array
    },
  },
});
export const { addMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;
