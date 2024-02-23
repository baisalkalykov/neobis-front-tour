import React from 'react'
import  { useState } from 'react';
import './BookedModal.scss'
function BookedModal() {
    const [newModal,SetnewModal] = useState(true)
   
  return (
    <div className={`modal ${newModal ? 'active' : ''}`}>
     <div className="booked">
      <p className='booked__p'>Your trip has been booked!</p>
      <button className='booked__btn'>Ok</button>
     </div>
  </div>
  );
  
}

export default BookedModal