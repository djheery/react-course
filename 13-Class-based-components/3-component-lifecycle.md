# Component Lifecycle

Handling side effects in functional components is done by hooks such as useEffect()

However, in class-based functions you cannot use React Hooks. 

Thus instead class based function have something called the component lifecycle. 

There are methods available for various moments in that lifecycle. 

Examples are: 

- componentDidMount();
  - when the component is rendered to the page. 
  - Mounts to the DOM
  - This is the same as useEffect with an empty dependancy array
- componentDidUpdate();
  - This is when a component changes 
  - Equivilant to useEffect with dependencies (it will re-evaluate every time a change happens for some component in the dom)
- componentWillUnmount();
  - This is called when a component is removed from the Dom. 
  - Use effect clean up function equivilant
