import { createStore, subscribe, dispatch } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'



const initialCounterState = {counter: 1, showCounter: true}
const initialAuthState = {isLoggedIn: true}


// When using redux toolkit we can't accidently mutate the initial state as redux toolkit will automatically overide the old state with the new state values, even if they were derived by mutating the old state. It does this by using a  package called immer. It clones the initial state, and overides it in an immutable way. 
const counterSlice = createSlice({
  name: 'counter', 
  initialState: initialCounterState,
  reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--
      },
      increase(state, action) {
        state.counter += action.payload;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      }
   }
});

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


// You must always return a new state that overides the previous state. 
// Do not simply mutate the old state and pass it back 
// This is because of referecne errors.

// const counterReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case "INCREMENT" :
//       return {counter: state.counter + 1, showCounter: state.showCounter}
//     case "DECREMENT" :
//       return {counter: state.counter - 1, showCounter: state.showCounter}
//     case "INCREASE" :
//       return {counter : state.counter + action.amount, showCounter: state.showCounter}
//     case "TOGGLE" :
//       return {counter: state.counter, showCounter: !state.showCounter}
//     default : 
//       return state;
//   }
// }


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;