import React, { Component } from "react";
import axios from "axios";
class FactByCategory extends Component {
  state = {
    value: "",
    factByCategory: []
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.chucknorris.io/jokes/random?category=${this.state.value}`
      )
      .then(res =>
        this.setState({
          factByCategory: [res.data.value]
        })
      );
  };
  render() {
    const factByCategory = this.state.factByCategory.map(
      (factByCategory, id) => (
        <div>
          <ul>
            <li key={id}>{factByCategory}</li>
          </ul>
        </div>
      )
    );
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Fact By Category
            <select value={this.state.value} onChange={this.handleChange}>
              <option />
              <option value="explicit">Explicit</option>
              <option value="fashion">Fashion</option>
              <option value="sport">Sport</option>
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        {factByCategory}
      </div>
    );
  }
}
export default FactByCategory;
