import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fake-data";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteUser: (state, action) => {
      const index = state.value.findIndex((user) => user.id === action.payload);
      state.value.splice(index, 1);
    },
    editUser: (state, action) => {
      const index = state.value.findIndex(
        (user) => user.id === action.payload.id
      );
      console.log("edit", index);
      state.value[index].username = action.payload.username;
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
