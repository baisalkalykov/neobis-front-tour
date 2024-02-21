import React from 'react';
import './Card.scss'
const Card = ({ title, image }) => {
    
  return (
    <div className="card">
      <img src={image} alt="" className='card__img' />
      <div className="card__text">
      <p className='card__p'>{title}</p>
      </div>
    </div>
  );
};

export default Card;
  
      