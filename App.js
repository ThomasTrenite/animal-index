import './App.css';
import { useState, useEffect } from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// Functional component
const App = () => {
  const [searchField, setSearchField] = useState('') // [value, setValue]
  const [title, setTitle] = useState('') // set title for page
  const [animals, setAnimals] = useState([]) // [value, setValue]
  const [filteredAnimals, setFilteredAnimals] = useState(animals)

  console.log('rendered')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        setAnimals(users)
    )
  }, []) // Nothing goes in the trigger because we only want to trigger the callback once.

  useEffect(() => {
    const newFilteredAnimals = animals.filter((animal) => {
      // if the name includes the string typed, then return true.
      return animal.name.toLowerCase().includes(searchField)
    });

    setFilteredAnimals(newFilteredAnimals)
    // Filter through animals, whenever either animals [ ] changes, or searchField changes.
  }, [animals, searchField])

  const onSearchChange = (event) => {      
      const searchFieldString = event.target.value.toLowerCase()
      setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {      
    const searchFieldString = event.target.value.toLowerCase()
    setTitle(searchFieldString);
}

  // Returns the UI
  return (
      <div className="App">
        <h1 className="app-title">A brand new feature</h1>
        <h1 className="app-title">{ title } </h1>

        <SearchBox 
          className='search-box-animals'
          onChangeHandler={onSearchChange} 
          placeholder='Search for animals..'
        /> 
        <br />
        <SearchBox 
          className='title-search-box'
          onChangeHandler={onTitleChange} 
          placeholder='Set title..'
        /> 

        <CardList anything={['a', 'z']} animals={filteredAnimals}/>

      </div>
  )
}

export default App;
