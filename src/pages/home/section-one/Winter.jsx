import React from 'react'
import boy from './winter-img/boy-it.png'
import './Winter.scss'
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
        <button className='winter__btn'>Let’s Go!</button>
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