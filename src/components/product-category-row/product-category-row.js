import React from 'react';
import './style.css';

const ProductCategoryRow = props => (
  <tr>
    <th colSpan="2">{props.category}</th>
  </tr>
);

export default ProductCategoryRow;
