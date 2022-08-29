# Intro To Redux

Redux is a very important library within React. 

In this module we will learn: 

- What is Redux and Why use it
- Redux basics & using Redux with React 
- Explore Redux Toolkit

## Another look at state in React 

Redux is a state management system for cross component/ app wide state. 

Helps us manage state across the whole app. 

You use reacts state management system to update the UI 

Split the defenition of State into three subsections:

- Local State
  - Data which changes and affects UI that bbelongs to a single component. 
    - A button that toggles some detail field within one component. 
    - This is managed with useState or useReducer (for more complex state)
- Cross-Component State
  - State that effects multiple components
  - An example could be a modal overlay
    - Open closed, how does it affect other compoenents. 
    - You manage this via prop-chanins/ prop-drilling. 
    - Passing state between different components and parents. 
- App-wide state
  - This is state that affects most/ all components 
  - This is where we used the context API before. 
  - An example could be user authentication 
    - This could change many areas of the App (navigation bar, allowed pages etc)

## Redux addresses Cross Component and App-Wide state 

Redux is used to manage cross-component and app-wide state management. React context and try to address the same thing 

## Redux vs React Context

Redux is a statemanagement system for cross-component and app wide state. 

useContext is very similar. 

Context has potential disadvantages: 
- Can become complexsetup / Management
  - A lot of context providers wrapping other context providers in the app
- Performance 
  - Context API is meant to be used for low frequency updates, but not that great if updates happen more fequently. 
    - Therefore Context is not a great replacement for redux in all scenarios. 



Whether you need redux or not depends on your application scenario. 

It is worth noting you can use both. Typically for app-wide state you use one of the two. But you could be using context to manage subsections of component state. 