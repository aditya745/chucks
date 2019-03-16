import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFacts } from '../store/actions/factActions';
import SavedFacts from './savedFacts';
class Main extends Component {
    state = {
        savedFacts: []
    }
    componentDidMount() {
        this.props.getFacts();
    }
    handleRefresh = () => {
        this.props.getFacts();
    }
    handleSave = value => {
        const temp = { value }
        this.setState({
            savedFacts: [...this.state.savedFacts, temp]
        })
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
                {details}
                <br />
                <button onClick={() => this.handleRefresh()}>New Joke</button>
                <SavedFacts savedFacts = {this.state.savedFacts} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    fact: state.reducer.facts
})
export default connect(mapStateToProps, { getFacts })(Main);