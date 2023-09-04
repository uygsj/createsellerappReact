import React from 'react';
import './TotalWorth.css';

function TotalWorth({ products }) {
  let totalWorth = 0;

  for (const product of products) {
    totalWorth += product.price;
  }

  return <p>Total value Worth of Product: Rs  {totalWorth}</p>;
}

export default TotalWorth;
