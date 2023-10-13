import React, { Component } from 'react';

class filtering extends Component {
  constructor() {
    super();

    this.state = {
      animals: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // Once fetched, there is going to be a promise (asynchronous). In this case, then(). This can be followed up with another promise.
      .then((response) => response.json()) // Converts response promise to JSON.
      .then((users) => this.setState(() => {
        return {animals: users}
      },
      () => {
        console.log(this.state)
      }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const filteredAnimals = this.state.animals.filter((animal) => {
      // if the name includes the string typed, then return true.
      return animal.name.toLowerCase().includes(this.state.searchField)
    });

    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search for animals.." 
          onChange={this.onSearchChange}
        />
        {filteredAnimals.map((animal) => {
          return (
            <div key={animal.id}>
              <h1>{animal.name}</h1> 
            </div>
          )
        })}
      </div>
    );
  }
}

export default filtering;