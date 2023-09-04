import React, { useState } from 'react';
import './ProductForm.css'; 

function ProductForm({ onAddProduct }) {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    if (!productId || !sellingPrice || !productName) {
      return;
    }

    onAddProduct({
      id: productId,
      price: parseInt(sellingPrice),
      name: productName,
    });

    setProductId('');
    setSellingPrice('');
    setProductName('');
  };

  return (
    <div className="product-form">
      <label htmlFor="productId">Product ID:</label>
      <input
        type="text"
        id="productId"
        value={productId}
        onChange={(event) => setProductId(event.target.value)}
      />
      <label htmlFor="sellingPrice">Selling Price:</label>
      <input
        type="text"
        id="sellingPrice"
        value={sellingPrice}
        onChange={(event) => setSellingPrice(event.target.value)}
      />
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        id="productName"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
      />
      <br/>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default ProductForm;
