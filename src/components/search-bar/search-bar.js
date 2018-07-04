import React from 'react';
import { TextField, Switch, FormControlLabel, Grid } from '@material-ui/core';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <Grid container direction="column">
          <TextField
            className="search-bar__input"
            type="search"
            value={this.props.value}
            placeholder="Search..."
            onChange={this.props.handleChangeOnInput}
          />
          <FormControlLabel
            control={
              <Switch
                className="search-bar-checkbox"
                type="checkbox"
                checked={this.props.checked}
                name="checkbox"
                id=""
                onChange={this.props.handleChangeOnCheckBox}
                color="primary"
              />
            }
            label={'Only show products in stock'}
          />
        </Grid>
      </div>
    );
  }
}
