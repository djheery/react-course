import React, { Fragment } from "react";
import mealsImg from '../../assets/meals.jpg'
import classes from '../Layout/Header.module.css'
import HeaderCardButton from './HeaderCardButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of Delicious Food!"></img>
      </div>
    </Fragment>
  )
}

export default Header; 