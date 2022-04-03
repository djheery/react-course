import React from 'react'
import UserListItem from './UserListItem'
import Card from '../UI/Card'
import styles from './UserList.module.css'

const UserList = (props) => {
  const removeItemHandler = (userID) => props.onRemoveUser(userID);

  const fullList = props.users.map(u => <UserListItem key={u.id} id={u.id} name={u.name} age={u.age} onRemove={removeItemHandler}/>)

  return (
    <Card>
      {fullList}
    </Card>
  )
}

export default UserList