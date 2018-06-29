import React from 'react';
import './style.css';
import SearchBar from '../search-bar/search-bar';
import ProductTable from '../product-table/product-table';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredText: '',
      isStockOnly: false
    };

    this.handleChangeOnCheckBox = this.handleChangeOnCheckBox.bind(this);
    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
  }

  handleChangeOnInput(e) {
    this.setState({
      filteredText: e.target.value
    });
  }

  handleChangeOnCheckBox(e) {
    this.setState(prevState => ({
      isStockOnly: !prevState.isStockOnly
    }));
  }

  render() {
    let filteredProducts = this.props.products;
    const stockState = this.state.isStockOnly;
    const filteredTextState = this.state.filteredText;

    if (stockState) {
      filteredProducts = this.props.products.filter(
        prod => prod.stocked === true
      );
    }

    const resultProducts = filteredTextState
      ? filteredProducts.filter(prod => prod.name.includes(filteredTextState))
      : filteredProducts;

    return (
      <div className="filterable-product-table">
        <div className="filterable-product-table__wrapper">
          <SearchBar
            handleChangeOnInput={this.handleChangeOnInput}
            handleChangeOnCheckBox={this.handleChangeOnCheckBox}
            value={this.state.filteredText}
            checked={this.state.isStockOnly}
          />
          <ProductTable products={resultProducts || this.props.products} />
        </div>
      </div>
    );
  }
}
