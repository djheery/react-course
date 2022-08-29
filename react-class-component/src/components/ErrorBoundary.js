import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  // This makes the component an Error Boundary 
  // This will be triggered whenever a child component is triggered;
  componentDidCatch(error) {
    this.setState({ hasError: true })    
  }
  
  // You wrap the children that you want to be protected by this Error Boundary with this component. hence why you return children.
  render() {
    if(this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;