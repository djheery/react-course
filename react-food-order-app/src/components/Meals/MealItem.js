import React from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <li id={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
            <p>{props.description}</p>
        </div>
        <div className={classes.price}>
          {price}
        </div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem;