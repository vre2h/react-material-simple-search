import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import FilterableProductTable from './components/filterable-product-table/filterable-product-table.js';
import products from './products';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <FilterableProductTable products={products} />
      </React.Fragment>
    );
  }
}
export default App;
