import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
import {sendCartData, getCartData} from './store/cart-actions'

let isInitial = true;

function App() {
  const cartIsShown = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))
  },[cart, dispatch])

  return (
    <Fragment>
      {notification && 
        <Notification 
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
