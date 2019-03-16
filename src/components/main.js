import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFacts, savedFacts } from '../store/actions/factActions';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './navbar';
class Main extends Component {
    componentDidMount() {
        this.props.getFacts();
    }
    handleRefresh = () => {
        this.props.getFacts();
    }
    handleSave = value => {
        this.props.savedFacts(value)
    }

    render() {
        const details = this.props.fact.map((fact, id) => (
            <div key={id}>
                <h2>{fact.value}</h2>
                <button onClick={() => this.handleSave(fact.value)}>Save</button>
            </div>
        ))
        return (
            <div>
                <Navbar savedFacts = {this.props.savedFacts} />
                {details}
                <br />
                <button onClick={() => this.handleRefresh()}>New Joke</button>
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    fact: state.reducer.facts,
    savedFacts: state.reducer.savedFacts
})
export default connect(mapStateToProps, { getFacts, savedFacts })(Main);