# How React Really Works 

React is a JavaScript Library for building a user interface 
React is all about components. Uses components to compose and update UI's 

React Dom is our interface to the Web. 
React does not know about the browser, it does not care about what the its components are made up with. 

React DOM cares about this.

React DOM is an interface to the web. 

React cares about the first two in this linked list 

Props ==> Components ===> REal DOM (What the user sees)
              ||
            State (internal data)
          Context 

REact will let React DOM know that some state has been updated and React DOM handles how that displays in the browser to the client. 

## How does React DOM work 

React uses the virtual DOM.
React determines how the component tree currently looks like and what it should look like. 
React DOM then renders this component tree in the correct manner.
React DOM manipulates the Real DOM. React handles the virtual DOM. 

Re-Evaluation Components is not the same as Re-Rendering the DOM. 

Components are Re-evaluated whenever props, state or context changes 
React then executes component functions to alter this state for the User 



Real DOM Is only updated in the places that there are differences between the React state and the state of the UI.
Real DOM is only changed rarely. 

React only passes the changes from your last snapshot to the current snapshot to the Real DOM so only the changed components are updated. 
Calls to the Real DOM are expensive if done too much, this is why React uses a virtual DOM to asses the changes before passing them to the real DOM. 

## Virtual DOM Diffing

An Example. 

Lets say the previous evaluation result is: 

```
<div>
  <h1>Hi There! </h1>
<div>

```

Lets say that the current evaluation is: 

```
<div>
  <h1>Hi There! </h1>
  <p>New Paragraph! </p>
<div>

```

In this case React would determine that the only thing new is the paragraph. 
React would then pass these changes to React DOM and then only insert this paragraph. 
React DOM would not rerender the entire DOM to do this. 
It would not touch the H1 or Div element, it would only insert the new paragraph.


