import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h2>The Products Page</h2>
      <ul>
        <li><Link to="/products/a-book">A Book</Link></li>
        <li><Link to="/products/a-guitar">A Guitar</Link></li>
        <li><Link to="/products/a-camel" >A Camel</Link></li>
      </ul>
    </section>
  );
};

export default Products;
