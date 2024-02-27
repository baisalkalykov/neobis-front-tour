import React from 'react'
import  { useState } from 'react';
import './BookedModal.scss'
function BookedModal() {
    const [newModal,setnewModal] = useState(true)
    const handleCloseModal = (e) => {
      e.stopPropagation();
      setnewModal(false);
    };
  return (
    <div className={`modal ${newModal ? 'active' : ""  }`}  >
     <div className="booked" >
      <p className='booked__p'>Your trip has been booked!</p>
      <button type='button' onClick={(e) => handleCloseModal(e)} className='booked__btn'>Ok</button>
     </div>
  </div>

  );
  
}

export default BookedModal