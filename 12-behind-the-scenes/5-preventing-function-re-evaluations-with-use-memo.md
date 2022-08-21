# Preventing Unnecessary Re-Evaluations with React.memo()

In a lot of apps re-evaluation chains are okay, as React is optimized for it. 

In bigger apps you may want to optimize for these occurences therefore there is a method known as useMemo().

useMemo() is used to tell React to only update specific components under certain conditions. 

To do this in the export line of the component do this: 

export default React.memo(ComponentName);

This tells React to look at all the props that this component gets, and look at the new value of all those props and compare it to the previous value. 

Then only if the new version of the props for said component has changed from the previous version should React re-evaluate the component. 

## Why don't we use this on all components if it allows optimization? 

This is because the optimization comes at a cost. 

When we use React.memo(ComponentName) it tells react that the first thing it needs to do is store the prop values so that it can compare previous props, and make a comparisons. 

This means that it has it's own performance cost through storing props, and comparing props of said component. 
Thefore there is a trade off. And the usecase is entirely dependent on the component. 

It depends on the number of props you have and the complexity of your component and sub components. 

It is useful when you have a huge component tree, to avoid rerendering all items within that component tree. 

## Common Gotcha 

Take the code below :

```

function App() => {
  const [ss, sp] = useState(false);

  const toggleSS = () => {
    sp(prevState => !prevState);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <ComponentItem show={true} />
      <Button onClick={toggleSS} >Show Paragraph</Button>
    <div>
  )
}

```

If we use React.memo(Button) on the export statement of the Button Component. You may think that it will stop it re-evaluation. 

This is wrong. This is becauwe of the way javascript works. 
For example, if we did this: 

{item1: 's', amt: 10} === {item1: 's', amt: 10}

What would this statement return? 

It would return false, as when comparing objects, or arrays in JS they are not refrencing the same array or obbject in memory. 
They are two separate items in memory. 

every time state is updated React will call/ create all of the methods inside of the component that the state has been updated in. 
Therefore every time state updates, React will create a new function called toggleSS. 

Therefore, when comparing the old Button prop of toggleSS to the new button prop of toggleSS it will not equal the same object/ function due to the way JavaScript works.

Remember that functions are just object, thus when we put onClick on the Button Component it is re-evaluated due to a the App component function "toggleSS" being a prop
