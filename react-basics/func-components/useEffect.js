import React from 'react'

export const useEffect = () => {

    // Use case 1: fetching data once
    useEffect(() => {
        console.log('effect fired!')  // Effect will only fire once
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => 
            setAnimals(users)
        )
    }, []) // Nothing goes in the trigger because we only want to trigger the callback once.

    // Use case 2: 
    useEffect(() => {
        const newFilteredAnimals = animals.filter((animal) => {
          return animal.name.toLowerCase().includes(searchField)
        });
    
        setFilteredAnimals(newFilteredAnimals)
        // Filter through animals, whenever either animals [ ] changes, or searchField changes.
    }, [animals, searchField])

  return (
    <div>

    </div>
  )
}
