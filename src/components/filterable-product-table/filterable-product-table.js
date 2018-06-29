import React from 'react';
import './style.css';
import SearchBar from '../search-bar/search-bar';
import ProductTable from '../product-table/product-table';

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="filterable-product-table">
        <div className="filterable-product-table__wrapper">
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      </div>
    );
  }
}
