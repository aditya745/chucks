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
      
      <div>
        <Router>
          <div>
            <ul className = "navbar">
              <li>
                <Link to="/" className="nav_Link">Home</Link>
              </li>
              <li>
                <Link to="/savedFacts" className="nav_Link">SavedFacts</Link>
              </li>
              <li>
                <Link to="/aboutMe" className="nav_Link">About Me</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/savedFacts" render={() => <SavedFacts savedFacts={this.props.saveFacts} />} />
              <Route path="/aboutMe" component={About} />
            </Switch>
          </div>
        </Router>
        </div>
        
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
