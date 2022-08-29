import { Component } from 'react';
import classes from './User.module.css';

// Class based components should extend Component class from react 
class User extends Component {
  // The render method acts like return in a functional component
  render() {
    // Notice "this.props.name" this is how we refer to props (this keyword) as props is an attribute of component which will be inherited.
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// Most of the time you only use Class or Functional not both 
// Unless you are migrating them 
// You used to have to use them. 

export default User;
