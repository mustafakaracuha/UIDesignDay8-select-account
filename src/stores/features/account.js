import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/user";

const initialState = {
  userData: users,
};

const accounts = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    userDelete: (state, action) => {
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
      );
    },
    userAdd: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { load, userDelete, userAdd, userEdit } = accounts.actions;
export default accounts.reducer;
