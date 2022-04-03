import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Wrapper from './components/Helpers/Wrapper';


function App() {

  const [users, addUser] = useState([]);
  const addUserHandler = (newUser) => addUser(() => [...users, newUser]);
  const removeUser = (userID) => {
    const usersArr = users.filter(user => user.id !== userID)
    addUser(usersArr);
  };

  return (
    //Helper wrapper, this could be a Fragment: <React.Fragment> || <> </> If your workspace is set up for it.
    <Wrapper>
      <UserForm onNewUser={addUserHandler} />
      <UserList users={users} onRemoveUser={removeUser}/>
    </Wrapper>
  );
}

export default App;
