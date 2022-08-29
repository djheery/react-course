
const initialCounterState = {counter: 1, showCounter: true}
const initialAuthState = {isLoggedIn: true}


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