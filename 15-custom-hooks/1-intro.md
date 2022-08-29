# Custom Hooks Intro 

This module looks into building custom hooks.
They will be prevelant when building your own React applications. 

You can only useReact hooks in react functions, the same applys to custom hooks

What is this module about: 

- Building custom hooks 
- How they apply to React projects

## What are custom hooks 

Custom hook are regular functions the same as built in hooks. 

They are functions that pertain to state. 
You can use custom hooks to outsource stateful logic into reuseable functions. 

Custom hooks can use other React hooks and React state. 

With custom hooks, you can outsource stateful logic into re-useable functions. 

## Creating a Custom React Hook Function

An example contains 2 counters, one counting forwards, and one counting backwards: 

The counters utilize useEffect to either subtract 1 from the counter or add one to the counter depending on whether it is the forward or backward counter. 

This means we can outsource this state to a custom hook to prevent code duplication. Observing the DRY principle. 

To outsource this state we should build custom hooks. 

You can create a Hooks folder to contain your custom hooks. 

In this folder we could create a "use-counter.js"
The file name is totally up to you, but the name indicates what the hook is for. 

The function you create must start with "use".
This signals to React that it is a hook. 

An example 

```

const useCounter = () => {
  cosnt [counter, setCounter] = useEffect(0);

  useEffect = (() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000)

    return () => clearInterval(interval); 
  }, [])

}

export default useCounter;

```

To use this function you would import useCounter into the file you want to use it in. 

```
useCounter()
```

This will tie the state created in useCounter to the component that the hook is called in. 
If it is used in multiple components, every component will have it's own state. 
It is simply the logic that the hook uses that is shared. 

Currently it is only set up for forwardCounting. 

## How can we access the state?

The custom hook can return things, for example the counter should return the counters current state: 

```

const useCounter = () => {
  cosnt [counter, setCounter] = useEffect(0);

  useEffect = (() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000)

    return () => clearInterval(interval); 
  }, [])

  return counter;
}

export default useCounter;

```

Now this is returned, the compontent can access it like this: 

``` 

const counter = useCounter();

```

## Make the Hook configurable: 

Currently it is only set up for forwardCounting. 
To make the hook configurable you must pass a parameter to the function, which the function logic can act upon

```

const useCounter = (directinForwards) => {
  cosnt [counter, setCounter] = useEffect(0);

  useEffect = (() => {
    const interval = setInterval(() => {
      if(directionForwards)
        setCounter((prevCounter) => prevCounter + 1);
      else 
        setCounter((prevCounter) => prevCounter - 1);
    }, 1000)

    return () => clearInterval(interval); 
  }, [forwards])

  return counter;
}

export default useCounter;


```

In the above example, we have added a boolean check to see if directionForwards is true. If it is we add 1 to the counter, else we subtract one from the counter. 

this means we have to update the call to the function in both forwards, and backwards counter: 


``` 
// forwards
const counter = useCounter(true);
//bacwards
const counter = useCounter(false);

```

We could also enter 1 or 0. 

Remember forwards must be added as a dependency of useEffect as it may change. 

