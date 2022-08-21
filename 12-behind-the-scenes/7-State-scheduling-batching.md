# State Scheduling and Batching 

State scheduling is the the way in which React schedules its state updates. 

When a state change function is executed, the state is not actually changed right away. Instead it is qued to be updated. 
Most of the time it will happen more or less immediately (to humans) but realistically React reserves the right to withold the state update until the next possible moment it can perform it. 

For example, if a user in writing into an input, this would take priority over a different state update therefore there is a chance that it could take longer. 

The gerenal chain is: 

```
const [currentState, changeState] = useState('DVD');
<MyComponent/ >
  => 
    setNewProduct('book')
      => 
        A state update is schedules 
          =>
            Scheduled State is changed 
              => 
                New state == book

```

This is why when we use functions to that depend on a previous state we should always use the function form: 

const setNewState = () => {
  sp(prevState => !prevState);
}

The above function is reliant on the previous state, therefore we let react know this by passing in the previous state as a parameter. React then knows that it is dependent of the previous state. 

Another example is the useEffect function, but in this we do not need to pass a callback as it has a dependencies array. 

## State Batching 

State batching refers to how React handles synchronose calls to updating state within a method. 
For example: 

```
const [state1, updateMyState1] = useState(false);
const [state2, updateMyState2] = useState(true);

const updateMyState = () => {
  updateState1(true);
  updateState2(false);
}

```

You may think that React would re-render the component these methods are within twice, due to two synchronus state updates. 
However, if 2 state updates are called in a row like this, React performs what is known as **batching**. 

This is where react will compile these two state updates into 1 state update, so they are both executed in the same DOM re-evaluation. 
This only happens in synchronus state updates, not if there are multiple all around the place. 



You may thin