import React from 'react';
import Main from './main';
import About from './aboutUs';
import Categories from './categories';
import SavedFacts from './savedFacts';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const Navbar = (props) => {
    return (
        <div>
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
                    
                    <Route exact path="/categories" component = {Categories} />
                    <Route exact path="/aboutUs" component = {About} />
                </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Navbar;