import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'

const CardList = ({ animals }) => (
    <div className='card-list'>
        {animals.map((animal, key) => {
            return (
                <Card 
                    animal={animal}
                    key={key}
                />
            )
        })}
    </div>
);

export default CardList;