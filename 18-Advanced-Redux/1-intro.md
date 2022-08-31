# Advanced Redux 

In this section we will explore some more advanced redux concepts:

- Handling Async Tasks with Reudux 
- Redux Dev Tools 
- Where to put our code

## Redux Side Effects (And Async Code)

Redux reducer functions must be pure, side effect free, synchronu functions: 

a Diagram of how this works:

Input (Old State, Action) ====> Output (New State)

## Where should we put side effects? 

We can put them into a component (e.g useEffect) this way redux does not have to deal with it. 

Or we write our own action creators (hooks). Redux can help us with this without changing the reducer functions. 

