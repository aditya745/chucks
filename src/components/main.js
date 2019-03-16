import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFacts, savedFacts } from '../store/actions/factActions';

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
        console.log(this.props.saveFacts)
        const details = this.props.fact.map((fact, id) => (
            <div key={id}>
                <h2>{fact.value}</h2>
                <button onClick={() => this.handleSave(fact.value)}>Save</button>
            </div>
        ));
        return (
            <div>
                
                {details}
                <br />
                <button onClick={() => this.handleRefresh()}>New Joke</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
    fact: state.reducer.facts,
    saveFacts: state.reducer.savedFacts
    }
}
export default connect(mapStateToProps, { getFacts, savedFacts })(Main);