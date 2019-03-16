import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import About from './components/aboutUs';
import Categories from './components/categories';
import SavedFacts from './components/savedFacts';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class App extends Component {
  render() {
    console.log(this.props.saveFacts)
    return (
      <div className="App">
      <Router>
      <div>
      <ul>
          <li>
              <Link to ="/">Home</Link>
          </li>
          <li>
              <Link to ="/savedFacts">SavedFacts</Link>
          </li>
          <li>
              <Link to ="/categories">Categories</Link>
          </li>
          <li>
              <Link to ="/aboutUs">About Us</Link>
          </li>
      </ul>
      <Switch>
          <Route exact path="/" component = {Main} />
          <Route path="/savedFacts" render = {() => <SavedFacts savedFacts = {this.props.saveFacts}/>} />
          <Route path="/categories" component = {Categories} />
          <Route path="/aboutUs" component = {About} />
      </Switch>
      </div>
  </Router>
      </div>
    );
  }
}

export default App;
