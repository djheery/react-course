import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css'
import ErrorBoundary from './ErrorBoundary';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'Damien' },
  { id: 'u5', name: 'Daniel' },
  { id: 'u6', name: 'Conor' },
  { id: 'u7', name: 'Ryan' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: ''
    }
  }

  componentDidMount() {
    // Send HTTP Request 
    // this.setState({filteredUsers: http request json data})
  }

  

  searchChangeHandler(e) {
    this.setState({searchTerm: e.target.value});
  }

  setFilteredUsers() {

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
          filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
      })
    };
  }

  render() {
    return (
      <Fragment>
        <input type='search' className={classes.finder} onChange={this.searchChangeHandler.bind(this)} />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
    
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };


// };

export default UserFinder;