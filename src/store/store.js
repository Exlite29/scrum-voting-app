import { configureStore } from "@reduxjs/toolkit";

import usernameReducer from "../Reducer/usernameSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
});

export default store;
