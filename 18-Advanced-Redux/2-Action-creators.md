# Action Creators in Redux 
 
Handling side effects, and async tasks in redux can be done in one of 2 ways:

- Inside components, using useEffect() 
- Via action creators 

## What are Action Creators

Action creators are built into redux. For example, when you: 

export const uiActions = uiSlice.actions; 

This indicates to redux that an action creator needs to be made for your state slice. 

Action creators enable the dispatch of actions that you have specified in your state slice. They are the same as reducers. 

You can build your own action creator in redux. 

## Thunks

When we write our own action creators, we can write them to include "Thunks" 

Thunks are functions that delays an action until later. It does not return the action itself but another function which eventually returns the action. 

It is a very comon pattern. 

