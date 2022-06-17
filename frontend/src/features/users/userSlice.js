import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //kiedy uzytkownik loguje się -> zapamiętaj poniższe rzeczy
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    //kiedy użytkownik wylogowuje się -> zapomnij
    setSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOut } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
