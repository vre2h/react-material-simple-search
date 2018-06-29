import React from 'react';
import './style.css';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="search"
          value={this.props.value}
          placeholder="Search..."
          onChange={this.props.handleChangeOnInput}
        />
        <label className="search-bar-checkbox__title">
          <input
            className="search-bar-checkbox"
            type="checkbox"
            checked={this.props.checked}
            name="checkbox"
            id=""
            onChange={this.props.handleChangeOnCheckBox}
          />
          {'Only show products in stock'}
        </label>
      </div>
    );
  }
}
