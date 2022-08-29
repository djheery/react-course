const redux = require("redux");

const counterReducer = (state = { counter: 1 }, action) => {
  if(action.type === "INCREMENT") 
    return {counter: state.counter + 1};
  

  if(action.type === "DECREMENT")
    return {counter: state.counter - 1};

  return state;
};

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state)
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT"});
store.dispatch({ type: "DECREMENT"});
store.dispatch({ type: "DECREMENT"});
store.dispatch({ type: "INCREMENT"});