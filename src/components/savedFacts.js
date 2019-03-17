import React from 'react';

const SavedFacts = props => {
    const savedFacts = props.savedFacts.map((fact, id) => {
      return <li key = {id}>{fact}</li>
    })
  return (
      <div className="savedFacts_container">
        <h1>SavedFact</h1>
        <h3>{savedFacts}</h3>
      </div>
    );
  
}

export default SavedFacts;