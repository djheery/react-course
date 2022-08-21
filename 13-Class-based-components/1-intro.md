# Class Based Components

Class based components are an alternative way of Building components in react. 

Besides building components as functions, you can also define classes of components to be built from. 
This is an optional way of approaching it. 
You will see class based components in libraries. 

In this section we will learn 

- What Class Based Components are and Why they exist 
- How to build class-based components 
- Error boundaries
  - Still require class based components 

## What and Why? 

Class based components are alternatives to Function based components. For example, up until now we have created components like this: 

```

const Product(props) => {
  return (
    <h2>A Product!</h2>
  )
}

export default Product;

```

Components are regular JavaScript which return rederable results (typically JSX)
These are called functional components

Class based components can be written like this: 

``` 

class Product extends Component {
  render() {
    return <h2>A Product!</h2>
  }
}

```

you define a class with a render() method. 
render() defines the to-be-rendered output. 

Functional components are the default and Most modern approach. 
Only Error Boundaries require class based components. 

Class pased components (prior to React 16.8) you had to use class-based coomponents to manage State. 

React 16.8 provided hooks. they are all the functions beginning with "use" such as useState() and useEffect() which allowed state to be updated in functional components. 

**Class based components cannot use React-Hooks** 


