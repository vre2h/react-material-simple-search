import React from 'react';
import { TableRow, TableCell, TableHead } from '@material-ui/core';

const ProductCategoryRow = props => (
  <TableHead>
    <TableRow>
      <TableCell colSpan="2">{props.category}</TableCell>
    </TableRow>
  </TableHead>
);

export default ProductCategoryRow;
