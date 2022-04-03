import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css"
import UserFormModal from '../UserFormModal/UserFormModal'

const UserForm = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if(name.trim().length === 0 || age.trim().length === 0) {
      setError({errorTitle: 'Input Length error', 
                       errorMessage: 'Your input length must be more than 0', 
                       errorOccurred: true})
      return;
    }

    if(+age < 1) {
      setError({errorTitle: 'Current Age Error', errorMessage: 'Age must be greater than 1', errorOccurred: true})
      return
    }
      

    props.onNewUser({name: name, age: age, id:`${Math.random().toString()}`})
    nameInputRef.current.value = ''; // Uncontrolled components
    ageInputRef.current.value = '';
    setError(null);
  }

  const closeErrorHandler = () => setError(null);

  return (
    <>
      {error !== null && (<UserFormModal title={error.errorTitle} message={error.errorMessage} onClick={closeErrorHandler}/>)}
      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className={styles['form-control']}>
            <label>User Name</label>
            <input type="text" className="" ref={nameInputRef} />
          </div>
          <div className={styles['form-control']}>
            <label>User Age</label>
            <input type="number" className="" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>    
  )
}

export default UserForm