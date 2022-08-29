import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const isCounterHidden = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const onInc = () => {
    dispatch(counterActions.increment());
  }

  const onIncrease = () => {
    dispatch(counterActions.increase(5))
  }

  const onDec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterHidden && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
        <button onClick={onIncrease}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
