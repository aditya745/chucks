import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFacts, savedFacts } from '../store/actions/factActions';
import axios from 'axios';

class Main extends Component {
    state = {
        value: "",
    }
    handleChange = e => {
        this.setState({value: e.target.value});
    }
    handleSubmit = e => {
        e.preventDefault();
        axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.value}`)
        .then(res => console.log(res.data.value)
            );
    }
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
                <form onSubmit = {this.handleSubmit}>
                    <label>
                    Fact By Category
                    <select value = {this.state.value} onChange= {this.handleChange}>
                    <option></option>    
                    <option value="explicit">Explicit</option>
                    <option value="fashion">Fashion</option>
                    <option value="sport">Sport</option>
                    </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>
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