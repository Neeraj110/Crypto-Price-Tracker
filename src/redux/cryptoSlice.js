import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../utils/mockData";

const initialState = mockData;

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCrypto: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
