import React, { useState } from 'react';
import arrow from '../../../assets-images/arrow (2).png';
import './Discover.scss';
import DiscoverCard from '../../../components/DiscoverCard/DiscoverCard';


function Discover() {
  const tabs= [
    {
    viewTab:'Popular',
    postTab:'popular'

  },
  {
    viewTab:'Featured',
    postTab:'featured',
  }, 
  {
    viewTab:'MostVisited',
    postTab:'most-visited',
  },
   {
    viewTab:'Europe',
    postTab:'europe'
  },
  {
    viewTab:'Asia',
    postTab:'asia'
  }
]

 const [category,setCategory]= useState('popular')
  const [active, setActive] = useState('Popular');

   const handleActiveClick =(tab)=>{
    setActive(tab.viewTab)
    setCategory(tab.postTab)
   }
   
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
          {tabs.map((tab,idx) => (
            <li
              key={idx}
              className={`discover__list__li ${active === tab.viewTab ? 'active' : ''}`}
              onClick={()=>handleActiveClick(tab)}
              style={{ color: active === tab.viewTab ? '#6A62B7' : 'black' }}
            >
              {tab.viewTab}
            </li>
          ))}
        </div>
        
        <DiscoverCard category={category} />
      </div>
    </div>
  );
}

export default Discover;

