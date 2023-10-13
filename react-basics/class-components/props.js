import React, { Component } from 'react';

// How it's passed through from parent component:
{/* <CardList animals={whatever_data}/> */}

class props extends Component {
    render() {
        console.log(this.props) // remember that 'this' refers to the class component
        const { animals } = this.props
        return (
            <div>
                {animals.map((animal) => {
                    return (
                        <div key={animal.id}>
                            <h1>{animal.name}</h1> 
                        </div>
                    )
                    })}
            </div>
        );
    }

    // Another example of how to work with props - search field.
    // <SearchBox 
    //     className='search-box'
    //     onChangeHandler={onSearchChange} 
    //     placeholder='Search for animals..'
    // /> 
    render() {
        return (
            <input 
                className={this.props.className}
                type="search" 
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default props;