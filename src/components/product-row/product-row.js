import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

const ProductRow = props => {
  const name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: 'red' }}>{props.product.name}</span>
  );
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{props.product.price}</TableCell>
    </TableRow>
  );
};

export default ProductRow;
