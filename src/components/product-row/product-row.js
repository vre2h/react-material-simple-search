import React from 'react';
import './style.css';

const ProductRow = props => {
  const name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: 'red' }}>{props.product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
