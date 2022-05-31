import { Link } from "react-router-dom";
import React from "react";

const Products = () => {
  return (
    <section>
      <h1> This is Products Page!!!</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/p3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
