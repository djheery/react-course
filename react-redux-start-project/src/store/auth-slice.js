import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {isLoggedIn: true}

const authSlice = createSlice({
  name: 'auth_state',
  initialState: initialAuthState,
  reducers: {
    login (state) {
      state.isLoggedIn = true;
    }, 
    logout (state) {
      state.isLoggedIn = false;
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer