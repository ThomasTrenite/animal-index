import React, { Component } from 'react';

class mapping extends Component {
    // React will run this method before anything else
  constructor() {
    super();

    // passing state with an object, using setState.
    this.state = {
      animals: [
        {
          id: 1,
          name: 'Cooper'
        },
        {
          id: 2,
          name: 'Juni'
        },
        {
          id: 3,
          name: 'Felicia'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.animals.map((animal) => {
          // 'Key' is to make sure the animal is unique. React needs to differentiate the animals from each other,
          // so that when they are updated, react only has to update that specific animal that changed name or whatever.
          return <h1 key={animal.id}>{animal.name}</h1> 
        })}
      </div>
    );
  } 
}

export default mapping;