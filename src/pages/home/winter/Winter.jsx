import React from 'react'
import { useNavigate } from 'react-router-dom'
import boy from './winter-img/boy-it.png'
import arrow from './winter-img/Arrow 1.svg'
import './Winter.scss'
import Discover from '../discover/Discover'
function Winter() {
  
  return (
    <div className="winter">
    <div className='winret__container'>
        <div className="winter__box">
       <div className="winter__description">
        <h2 className='winter__h2'>Winter <br /> Vacation Trips</h2>
        <p className='winter__text'>
        Enjoy your winter vacations with warmth <br />
        and amazing sightseeing on the mountains. <br />
        Enjoy the best experience with us!
        </p>
        <button className='winter__btn'
         onClick={() =>
          window.scrollTo({
            top: 700,
            left: 0,
            behavior: 'smooth',
          })
        }>Let’s Go!
        <img src={arrow} alt=""  className='arrow'/>
        </button>
       </div>
       <div className="winter__img">
        <img src={boy} alt="" className='img'/>
       </div>
       </div>
    </div>

    </div>
  )
}

export default Winter