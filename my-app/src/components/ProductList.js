import React from 'react';
import './ProductList.css'; 

function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="product-list"> 
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
