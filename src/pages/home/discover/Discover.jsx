import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from './discover-img/arrow (2).png';
import mountain from './discover-img/Frame 26.png';
import Card from '../../../components/cards/Card';
import './Discover.scss';
import kg from '../../../assets/flag_kg.png'
import ru from '../../../assets/flag_ru.png'
import kz from '../../../assets/flag_kz.png'

function Discover() {
  const tabs = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];
  const [active, setActive] = useState('Popular');
  const handleTabClick = (tab) => {
    setActive(tab);
  };
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/onetour')
  }
  const cardsData = {
    Popular: [
      { title: "Popular Destination 1", image: mountain },
      { title: "Popular Destination 2", image: mountain },
      { title: "Popular Destination 3", image: mountain },
    ],
    Featured: [
      { title: "Featured Destination 1", image: ru },
      { title: "Featured Destination 2", image: ru },
      { title: "Featured Destination 3", image: ru },
    ],
    'Most Visited': [
      { title: "Most Visited Destination 1", image: kg },
      { title: "Most Visited Destination 2", image: kg },
      { title: "Most Visited Destination 3", image: kg },
    ],
    Europe: [
      { title: "Europe Destination 1", image: kz  },
      { title: "Europe Destination 2", image: kz },
      { title: "Europe Destination 3", image:kz  },
    ],
    Asia: [
      { title: "Asia Destination 1", image: mountain},
      { title: "Asia Destination 2", image: mountain },
      { title: "Asia Destination 3", image: mountain },
    ],
  };
  // Функция отрисовки карточек
  const renderCards = () => (
    <>
      {cardsData[active].map((card, index) => (
        <Card key={index} title={card.title} image={card.image} />
      ))}
    </>
  );

  

  return (
    <div className='discover'>
      <div className="discover__container">
        <div className="discover__text">
          <p className='discover__text__p'>Discover</p>
          <div className="discover__text__arrows">
            <button className='discover__btn'>
              <img src={arrow} alt="" className='discover__prew-img' />
            </button>
            <button className='discover__btn'>
              <img src={arrow} alt="" className='discover__next-img' />
            </button>
          </div>
        </div>
        <div className="discover__list" >
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`discover__list__li ${active === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
              style={{ color: active === tab ? '#6A62B7' : 'black' }}
            >
              {tab}
            </li>
          ))}
        </div>
       
        <div className="discover__cards" onClick={handleClick}>
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default Discover;

