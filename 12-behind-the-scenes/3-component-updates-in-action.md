# Component Updates in action

We will take the previous example: 

We start with react code like this: 

```
function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
    </div>
  )
}

```

Say we want to add a paragraph we could do this via useState to register some action that will cause a paragraph to be inserted: 

```
function App() {
  const [paraInserted, insertParagraph] = useState(false);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {paraInsterted && <p>This is new!</p>}
    </div>
  )
}

```

First you will not see the paragraph as the state has not been changed. 
Now we add a button component that can perform the state change:

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

This will cause the paragraph to be shown on click. 
Note the use of the function version of useState inside handleInsertParagraph go bback and have a look why this is used. 

If you look at the DOM when you click the button you will see that the only thing that happens to the elements is a paragraph is inserted, none  of the other elements are touched. This is a proof that the whole DOM is not rerendered just one element.

