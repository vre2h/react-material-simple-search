import React from 'react';

import './App.css';
import FilterableProductTable from './components/filterable-product-table/filterable-product-table.js';
import products from './products';

class App extends React.Component {
  render() {
    return <FilterableProductTable products={products} />;
  }
}
export default App;
