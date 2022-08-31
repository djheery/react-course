import { NavLink, Route } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <ul className={classes.nav}>
        <li>
          <NavLink to="/quotes" activeClassName={classes.active}>
            All Quotes
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-quote" activeClassName={classes.active}>
            Add Quote
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
