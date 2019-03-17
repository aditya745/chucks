import React from 'react';

const SavedFacts = props => {
    const savedFacts = props.savedFacts.map((fact, id) => {
      return <li key = {id}>{fact}</li>
    })
  return (
      <div>
        <h1>savedFact</h1>
        <h3>{savedFacts}</h3>
      </div>
    );
  
}

export default SavedFacts;