import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Modal from '../../components/Modal/Modal';
import './OneTour.scss'
import mon from './Rectangle 38.png'
import arrow from '../home/winter/winter-img/Arrow 1.svg'
import location from './u_map-marker.svg' 
function OneTour() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
 const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/')
  } 

  const [ModalActive, SetModalActive]=useState (false)
  
 
  return (
    <div className='onetour'>
      
      <img src={mon} alt=""  className='onetour__img'/>
      <button className='onetour__btn' onClick={handleClick}>
        <img src={arrow} alt=""  className='onetour__arrow'/>
        Go back</button>
      <div className="onetour__container">
      
           <div className="onetour__box">
            <h2 className='onetour__name'>Mount Fuji</h2>
            <div className="onetour__location">
              <img src={location} alt=""className='onetour__location__svg' />
              <p className='onetour__location__p'>Honshu, Japan</p>
            </div>
            <div className="onetour__description">
              <p className='onetour__description__p'>Description</p>
              <p className='onetour__description__title' ></p>
            </div>
            <div className="onetour__reviews">
              <p className='onetour__description__p'>Reviews</p>
              <p className='onetour__description__title' ></p>
            </div>
            <button className='onetour__btns' onClick={() => SetModalActive(true)}>
            Book now
          </button>
           </div>
        <Modal  active={ModalActive} setActive={SetModalActive}  />
      </div>
    </div>
  )
}

export default OneTour