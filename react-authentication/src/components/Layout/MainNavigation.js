import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logoutHandler();
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!authCtx.isLoggedIn && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {authCtx.isLoggedIn && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {authCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
