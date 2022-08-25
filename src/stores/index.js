import { configureStore } from "@reduxjs/toolkit";
import account from "./features/account";


const store = configureStore({
  reducer: {
    account
  },
});

export default store;
