import React from 'react';
import './card.styles.css'

const Card = ({ animal }) => {
    const { id, name, email } = animal
    return (
        <div className='card-container' key={id}>
            <img 
                alt={`animal ${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=80x80`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;