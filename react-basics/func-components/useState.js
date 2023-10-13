import React from 'react'

export const useState = () => {
  const [searchField, setSearchField] = useState('') // [value, setValue]

  const onSearchChange = (event) => {    
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString);
  }

  return (
    <div>

    </div>
  )
}
