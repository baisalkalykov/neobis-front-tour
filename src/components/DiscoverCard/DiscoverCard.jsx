import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DiscoverCard.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';


function DiscoverCard({category}) {
  const [data,setData]=useState([])
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchpopular = async () => {
      try {
        const response = await axios.get(`https://phobic-honey-production.up.railway.app/api/trips/${category}`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
     
    fetchpopular();
  }, [category]);
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
    <div className='popularcards'>
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
         
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="popularcards__card" key={el.id}>
            <Link to={`onetour/${el.id}`} className='popularcards__link'>
               <img src={el.imageUrl} alt="" className='popularcards__card__img' />
            </Link>
            <div className="popularcards__div"></div>
              <p className='popularcards__des'>{el.destination}</p>
           </div>
        </SwiperSlide>
       ))}
       
      </Swiper>
   
      
    </div>
    </>
  )
}

export default DiscoverCard