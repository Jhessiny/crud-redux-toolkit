import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../fake-data";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: usersData },
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    editUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});
