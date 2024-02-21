import React from 'react'
import './Recommended.scss'
import image from './Frame 32.png'
function Recommended() {
  return (
    <div className='recommended'>
        <div className="recommended__container">
            <p className='recommended__p'>Recommended</p>
            <div className="recommended__cards">
                <div className="recommended__card">
                    <img src={image} alt="" />
                </div>
                <div className="recommended__card">
                    <img src={image} alt="" />
                </div>
                <div className="recommended__card">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommended