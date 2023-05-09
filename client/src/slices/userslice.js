import { createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

const initialState = {
  user: null,
};

export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userslice.actions;

export const getUser = (state) => state.userInfo.user;

export default userslice.reducer;

export const handleLogin = (token) => {
  return async (dispatch) => {
    const response = await axios.get("/user/data", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(setUser(response.data));
    console.log(response.data);
  };
};
