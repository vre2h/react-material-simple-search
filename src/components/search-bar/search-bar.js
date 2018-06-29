import React from 'react';
import './style.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="search"
          value={this.state.value}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <label className="search-bar-checkbox__title">
          <input
            className="search-bar-checkbox"
            type="checkbox"
            name="checkbox"
            id=""
          />
          {'Only show products in stock'}
        </label>
      </div>
    );
  }
}
