import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PopularCard.scss'
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
function PopularCard() {
  const [popular,Setpopular]=useState([])
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchpopular = async () => {
      try {
        const response = await axios.get('https://phobic-honey-production.up.railway.app/api/trips/popular');
        Setpopular(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchpopular();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
    <div className='popularcards'>
    
         
      {popular.map((el)=>(
        
        <div className="popularcards__card">
        
         <img src={el.imageUrl} alt=""  className='popularcards__card__img'/>
         <div className="popularcards__div">
         </div>
         <p className='popularcards__des'>{el.destination}</p>
      
        </div>
      ))}
      
    </div>
    </>
  )
}

export default PopularCard