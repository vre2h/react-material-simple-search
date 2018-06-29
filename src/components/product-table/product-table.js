import React from 'react';
import './style.css';
import ProductCategoryRow from '../product-category-row/product-category-row';
import ProductRow from '../product-row/product-row';

export default class ProductTable extends React.Component {
  render() {
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
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
