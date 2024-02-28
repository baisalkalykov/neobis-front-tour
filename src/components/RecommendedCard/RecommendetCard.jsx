import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RecommendetCard.scss'
const RecommendedTrips = () => {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('https://phobic-honey-production.up.railway.app/api/trips/recommended');
        setTrips(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTrips();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  
  return (
    <div className='recocard'>
      <div className="recocard__cards">
          {trips.map((trip) => (
             <div className="recocard__card" key={trip.id}>
              <Link to={`onetour/${trip.id}`}>
              <img src={trip.imageUrl} alt="" className='recocard__img' />
              </Link>
           
            <div className="recocard__name">
            </div>
            <p className='recocard__title'>{trip.destination}</p>
            </div>
             ))}
             
            </div>
    </div>
  );
};

export default RecommendedTrips;
