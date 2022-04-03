import React from 'react'
import Card from '../UI/Card'
import ReactDOM from 'react-dom'
import Button from '../UI/Button'
import styles from './UserFormModal.module.css' 

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal} >
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button">Close Error Handler</Button>
      </footer>
    </Card>
  )
}

const UserFormModal = props => {
  return (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} />, document.getElementById("overlay-root"))}
  </React.Fragment>
  )
}

export default UserFormModal