# Preventing Function Re-creation with useCallback()

To prevent component evaluation when you have a function passed as props you can use the React method useCallback();

useCallback allows us to store function across exectution. 

For example, the toggleSS function in the pervious section could be stored and not re-made on state update. 

This is what useCallback does in memory. Take the following example: 

obj1 = {}
obj2 = {}

obj1 === obj2 // This will be false 

Use callback essentially does this on re-evaluation of a component when state updates: 

obj2 = obj1

The above assignments, assigns obj2 to the same memory location as obj1 thus it is pointing to the same object. 
There fore the method has not been re-made, instead it has assinged the new method made, as a pointer to the old method. 

To do this you have to do this: 

```
const App = () => {
  // Other code...

  const toggleSS = useCallback(() => {
    sp((prevShowPara) => !prevShowPara);
  }, [])

  // Other code.. (View previous section for what the code is)
}

```

That is is. Just wrap the function in useCallback() and it will assign the re-made function to the same pointer as the intitial function in memory. You also need to supply dependencies to the function just as in useEffect(). In this case we can leave the dependencies array blank as React ensures the state updating function in useState will never change (which is what sp is)

## useCallback and Dependencies 

You need to specify the dependency array.
This is because it provides an idicator for the situations in which the function should be re-made and not just referenced to the previous example. 

This is all to do with closures in JavaScript. 

When a function is made, and put into the callstack, JavaScript closes all local variables referenced within the function scope. 
This means that all variables within the array (even if present outside) are assigned to constants that are immutable. 

With useCallback() any variables referenced within the method must be provided as dependencies, as it is an indication, that if this variable changes, then the old closure is incorrect. Thus we should re-evaluate the method and remake it using the new value. 

For example: 

```
const App = () => {
  // Other code...
  let allowToggle = true;
  const toggleSS = useCallback(() => {
    if(allowToggle)
      sp((prevShowPara) => !prevShowPara);
  }, [allowToggle])

  // Other code.. (View previous section for what the code is)
}

```

In the above example, we must include allowToggle as a dependency as it could change in future, leaving the old method declaration irrelevant, thus making it a necessesity to remake the method. 

this is particulaly evident if we use useState()



```
const App = () => {
  // Other code...
  const [allowToggle, setallowToggle] = useState(true);
  const toggleSS = useCallback(() => {
    if(allowToggle)
      sp((prevShowPara) => !prevShowPara);
  }, [allowToggle])

  // Other code.. (View previous section for what the code is)
}

```

When using useState() there is a definite chance that in some circumstances allowToggle will change. There fore the old closure within toggleSS and the useCallback function should be re-evaluated. 

Closures in JavaScript, is the practice of making variabbles within a function constants when in the call stack so that they cannot be changed before calling. 




