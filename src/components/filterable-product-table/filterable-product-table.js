import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SearchBar from '../search-bar/search-bar';
import ProductTable from '../product-table/product-table';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
  root: {
    height: '100vh'
  }
};

class FilterableProductTable extends React.Component {
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
    const { classes } = this.props;

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
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <div className="filterable-product-table">
                <div className="filterable-product-table__wrapper">
                  <SearchBar
                    handleChangeOnInput={this.handleChangeOnInput}
                    handleChangeOnCheckBox={this.handleChangeOnCheckBox}
                    value={this.state.filteredText}
                    checked={this.state.isStockOnly}
                  />
                  <ProductTable
                    products={resultProducts || this.props.products}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FilterableProductTable);
