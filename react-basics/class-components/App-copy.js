import {Component} from "react";
import './App.css';

import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/search-box/search-box.component";

// Class component
class App extends Component {
  constructor() {
    super();

    this.state = {
      animals: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {animals: users}
      },
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    // setState is Unique to class components. In functional, we use useState hook.
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    // Optimizations: we have pulled off these methods and values, originally on this.state, and casted them to variables.
    // The advantage is that now you do not have to write this.state every time = better readability.
    const { animals, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredAnimals = animals.filter((animal) => {
      // if the name includes the string typed, then return true.
      return animal.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className="app-title">Animal Index - Udemy React Course </h1>
        <SearchBox 
          className='search-box-animals'
          onChangeHandler={onSearchChange} 
          placeholder='Search for animals..'
        /> 

        <CardList anything={['a', 'z']} animals={filteredAnimals}/>
      </div>
    );
  } 
}

export default App;
