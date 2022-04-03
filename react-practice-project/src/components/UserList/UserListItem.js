import React from 'react'

import styles from './UserListItem.module.css'

const UserListItem = (props) => {
  
  const removeItem = () => props.onRemove(props.id);

  return (
    <div className={styles.listItem} onClick={removeItem}>
      <p>{props.name}: ({props.age} years old)</p>
    </div>
  )
}

export default UserListItem