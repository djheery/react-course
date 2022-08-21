# Child Component Re-evaluation

It is worth understanding that when state updates in React it will update all Custom components every time. 

For example: 

```
function App() {
  const [paraInserted, insertParagraph] = useState(false);
  const handleInsertParagraph = () => {
    insertParagraph(prevState => !prevState);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {paraInsterted && <p>This is new!</p>}
      <Button onClick={handleInsertParagraph}>Show Paragraph</Button>
    </div>
  )
}
```

When the state is updated for the paragraph, the Button component will also be called every time. This is because every time that state changes, all children of that component will also be re-evaluated and called. 

For example if I wrote a console log in the Button component, when the button is pressed, it will call that bbutton to check if anything has changed within the bbutton. thus the console log would be called even though it does not have any changes. 

This is worth realizing because say a component has sub components, and that component has further subcomponents, if the state changes in parent component, all of those sub-components will be re-evaluated and call all of them. 

This is bad as in a large application this can slow it down. 

We will review something to help this in the next lesson. 
