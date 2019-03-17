import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFacts, savedFacts } from '../store/actions/factActions';
import FactByCategory from './factByCategory';

class Main extends Component {
    componentDidMount() {
        this.props.getFacts();

    }
    handleRefresh = () => {
        this.props.getFacts();
    }
    handleSave = (value, id) => {
        this.props.savedFacts(value, id)
    }

    render() {
        const details = this.props.fact.map((fact, id) => (
            <div key={id}>
                <h2>{fact.value}</h2>
                <button onClick={() => this.handleSave(fact.value, fact.id)}>Save</button>
            </div>
        ));

        return (
            <div>
                <h1>Random Joke</h1>
                {details}
                <br />
                <button onClick={() => this.handleRefresh()}>New Joke</button>
                <FactByCategory />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        fact: state.reducer.facts
    }
}
export default connect(mapStateToProps, { getFacts, savedFacts })(Main);