import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'

class CardList extends Component {
    render() {
        // console.log('render from CardList')
        // console.log(this.props.animals) // remember that 'this' refers to the class component
        const { animals } = this.props
        return (
            <div className='card-list'>
                {animals.map((animal, key) => {
                    return (
                        <Card 
                            // name={name} 
                            // email={email} 
                            // id={id}
                            animal={animal}
                            key={key}
                        />
                    )
                })}
            </div>
        );
    }
}

export default CardList;