import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import TotalWorth from './components/TotalWorth';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('myProducts'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myProducts', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (productIdToDelete) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productIdToDelete
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Product Seller App</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      <TotalWorth products={products} />
    </div>
  );
}

export default App;
