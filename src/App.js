import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import About from './components/aboutMe';
import SavedFacts from './components/savedFacts';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/savedFacts">SavedFacts</Link>
              </li>
              <li>
                <Link to="/aboutMe">About Me</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/savedFacts" render={() => <SavedFacts savedFacts={this.props.saveFacts} />} />
              <Route path="/aboutUs" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    saveFacts: state.reducer.savedFacts,

  }
}

export default connect(mapStateToProps)(App);
