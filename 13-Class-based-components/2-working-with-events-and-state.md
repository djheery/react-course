# Working with State and Events in Class based components 

Working with state and events in class based components work quite a lot differently to functional components.

You cannot use hooks like useState or useEffect. 
Instead you define a state in a constructor for your class. 

You must always calls the super() constructor when you use a constructor in your class. 

The state variable must always be called "state" and must be an object with various state params. 

Methods that manipulate mutable state must be methods of the class. 
Remember a class extends Component. 

Then to update this state you should use the method: 

this.setState({})

This method takes and object, and the name of the state that you want to update. 
For example, 

this.setState({showUsers: false});

You can also pass it a callback function if the change in state relies on the current state. 
In the callback function, the current state is automatically provided as a parameter. 

this.setState((curState) => {showUsers: !cuState.showUsers})

When calling said function from the render method you should A) make sure that all references to the stateVariable "showUsers" are prefixed with: 

this.showUsers;

also you should bind the this keyword to the the state function wherever it is called. This is due to the way that the this keyword functions in JavaScript. 

It pertains to the window object when used within a function: 

```
<button onClick={this.toggleUsersHandler.bind(this)}>
```

Within the render method you can declare relavent functions to the component. 
This is as if they were in a functional component. 

````
  toggleUsersHandler() {
    ...
  }

/// NO NON CLASS FUNCTIONS HERE

  render() {
    const someComponentFunction = () => "HelloWorld"
    return <>{someComponentFunction}</>
  } 