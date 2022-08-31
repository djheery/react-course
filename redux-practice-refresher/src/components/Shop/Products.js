import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { 
    id: 'i1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote' 
  }, 
  {
    id: 'i2',
    price: 12, 
    title: 'My Second Book',
    description: 'My Second Book Ever'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(p => (
            
            <ProductItem 
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              price={p.price}
            />
            
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
