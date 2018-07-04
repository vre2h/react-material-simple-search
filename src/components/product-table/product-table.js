import React from 'react';
import {
  withStyles,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@material-ui/core';

import ProductCategoryRow from '../product-category-row/product-category-row';
import ProductRow from '../product-row/product-row';

const styles = {
  root: {
    width: '100%'
  }
};

class ProductTable extends React.Component {
  render() {
    const { classes } = this.props;

    const products = this.props.products;
    const uniqueCtg = products
      .map(prod => prod.category)
      .filter((ctg, idx, arr) => idx === arr.lastIndexOf(ctg));
    const rows = [];

    uniqueCtg.forEach(ctg => {
      rows.push(<ProductCategoryRow category={ctg} key={ctg} />);
      products.forEach(prod => {
        if (ctg === prod.category) {
          rows.push(<ProductRow product={prod} key={prod.name} />);
        }
        return null;
      });
    });

    return (
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(ProductTable);
