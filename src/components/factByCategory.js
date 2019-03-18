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
        <div key={id}>
          <ul className="savedFacts_container">
            <li>{factByCategory}</li>
          </ul>
        </div>
      )
    );
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
        <div className="form_header">
          <h2 className="fact_label">Fact By Category</h2>
        </div>
          <div className="select_flex">
            <div>
              <select value={this.state.value} onChange={this.handleChange} className="custom_select">
                <option value="dev">Dev</option>
                <option value="explicit">Explicit</option>
                <option value="fashion">Fashion</option>
                <option value="sport">Sport</option>
                <option value="food">Food</option>
                <option value="movie">Movies</option>
                <option value="celebrity">Celebrity</option>
                <option value="science">Science</option>
                <option value="political">Political</option>
                <option value="religion">Religion</option>
                <option value="animal">Animal</option>
                <option value="history">History</option>
                <option value="music">Music</option>
                <option value="travel">Travel</option>
                <option value="career">Career</option>
                <option value="money">Money</option>
              </select>
            </div>
            <div className="submit_button input">
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
        {factByCategory}
      </div>
    );
  }
}
export default FactByCategory;
