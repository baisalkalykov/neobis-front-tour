import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Modal from '../../components/Modal/Modal';
import './OneTour.scss'
import arrow from '../../assets-images/Arrow 1.svg'
import location from './u_map-marker.svg' 
function OneTour() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [ModalActive, SetModalActive] = useState(false);

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    axios(`https://phobic-honey-production.up.railway.app/api/trips/${id}`)
      .then(({ data }) => {
        setData(data); // Use empty array if data.trips is undefined
      })
      .catch(error => {
        console.error('Error fetching meal details:', error);
      });
  }, [id]);
  return (
    <div className='onetour'>
      {
        data && data.images &&    <img src={data.images[0]} alt="" className='onetour__img'  />
      }
       

      <button className='onetour__btn' onClick={handleClick}>
        <img src={arrow} alt="" className='onetour__arrow' />
        Go back
      </button>
      <div className="onetour__container">
        <div className="onetour__box">
          <h2 className='onetour__name'>{data.location}</h2>
          <div className="onetour__location">
            <img src={location} alt="" className='onetour__location__svg' />
            <p className='onetour__location__p'>{data.country}</p>
          </div>
          <div className="onetour__description">
            <p className='onetour__description__p'>Description</p>
            <p className='onetour__description__title'>{data.destination}</p>
          </div>
          <div className="onetour__reviews">
            <p className='onetour__description__p'>Reviews</p>
            <div className="onetour__reviews-card">
              
            </div>
          </div>
          <button className='onetour__btns' onClick={() => SetModalActive(true)}>
            Book now
          </button>
        </div>
        <Modal active={ModalActive} setActive={SetModalActive} />
      </div>
    </div>
  );
}



export default OneTour