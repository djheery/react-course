import { useState, Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    // With class based components, your state is always an object
    // It also must bbe named "State";
    this.state = {
      showUsers: true,
      moreState: "Second state",
    };
  }

  componentWillUnmount() {
    console.log("User Unmounted");
  }

  toggleUsersHandler() {
    // This is how you set state in react
    // you should not simple use this.state.showUsers = false
    // Always use this.setState({}) with react
    // You only pass in the state you want to change, you do not need to worry about the rest.
    // you should always pass in an object
    // Set state supports a callback function where the argument is the current state
    // you must return an object.
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
