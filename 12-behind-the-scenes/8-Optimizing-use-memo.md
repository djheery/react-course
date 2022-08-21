# Optimizing UseMemo 

Using useMemo() can be useful for storing operations in React. 
If you have operations that may be expensive, such a sorting items you may not want to sort items every time that the component the items are sorted in are updated. 

For example 

```

const ListComponent = (props) => {
  const items = props.items.sort((a, b) => a-b);
  

  return (
    <Fragment>
      <h2>{props.title}
      <ul>
        {items.map((item) => {
          <li key={item}>{item}</li>
        })}
      </ul>
    </Fragment>
  )

}

```

In the above example, whenever the title is updated, the items will be sorted again. 
To fix this we can call useMemo. This is the same as memo() and useCallback() as it will store the items in memory and not re-perform the function every time the component is re-evaluated. 

```
const ListComponent = (props) => {
  const {items} = props;

  const sortedListItems = useMemo(() => items.sort((a, b) => a-b), [items]);
  

  return (
    <Fragment>
      <h2>{props.title}
      <ul>
        {sortedListItems.map((item) => {
          <li key={item}>{item}</li>
        })}
      </ul>
    </Fragment>
  )

}

```

In this method we use object destructuring to pull items out of the props dependency. 
Then pass items as a dependency to useMemo() so that it knows if it changes that the function needs to be re-evaluated and re-performed. 

You can also use useMemo() on static data that you may want to pass into a function that would otherwise change, forexample arrays

If we were passing an array of numbers as props to the ListComponent component then it would look like this: 

```

  const listItems = useMemo(() => [1, 2, 4, 5], []);
  return (
    <ListComponent items={listItems}>
  )

```

This way the array would be stored in memory. 

