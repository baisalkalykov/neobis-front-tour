import React from 'react'
import './Discover.scss'
import arrow from './discover-img/arrow (2).png'
import a from './discover-img/Скриншот 17-02-2024 160703.jpg'
import mountain from './discover-img/Frame 26.png'
function Discover() {
  return (
    <div className='discover'>
        <div className="discover__container">
            <div className="discover__text">
                <p className='discover__text__p'>Discover</p>
                <div className="discover__text__arrows">
                     <button className='discover__btn'>
                     <img src= {arrow} alt="" className='discover__prew-img'/>
                     </button>
                     <button className='discover__btn'>
                     <img src= {arrow} alt="" className='discover__next-img'/>
                     </button>
                </div>
            </div>
            <div className="discover__list">
              <li className='discover__list__li'>Popular</li>
              <li className='discover__list__li'>Featured</li>
              <li className='discover__list__li'>Most Visited</li>
              <li className='discover__list__li'>Europe</li>
              <li className='discover__list__li'>Asia</li>
            </div>
            <div className="discover__cards">
              <div className="discover__card">
                <img src={mountain} alt="" className='img' />
              </div>
              <div className="discover__card">
                <img src={mountain} alt="" className='img' />
              </div>
              <div className="discover__card">
                <img src={mountain} alt="" className='img' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Discover