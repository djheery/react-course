import classes from './Header.module.css';
import { authActions } from '../store/auth-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const loginHandler = () => {
    dispatch(authActions.login())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
        {!isLoggedIn && <button onClick={loginHandler} >Login</button>}
          {isLoggedIn &&<> <li><a href='/'>My Products</a></li><li><a href='/'>My Sales</a></li><li><button onClick={logoutHandler}>Logout</button></li></>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
