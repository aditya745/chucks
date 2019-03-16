import React from 'react';

const SavedFacts = props => {
  console.log(props.savedFacts);
  const savedFacts = props.savedFacts.map((savedFact, id) => 
    <li key= {id}>{savedFact.value}</li>
  );  
  return (
      <div>
        <h1>{savedFacts}</h1>
      </div>
    );
  
}

export default SavedFacts;