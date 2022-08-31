import { createStore, subscribe, dispatch } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice';
import authReducer from './auth-slice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});


export default store;