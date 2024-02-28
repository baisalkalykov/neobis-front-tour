import  { useState } from 'react';
import {useForm,Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Modal.scss';
import styles from './PhoneStyle.css'
import close from '../../assets-images/close.svg';
import peopleSvg from '../../assets-images/people (2).png' 
import BookedModal from '../BookedModal/BookedModal';
import axios from 'axios';

const Modal = ({ active, setActive,id}) => {
  const [count, setCount] = useState(0);
  const [open,setOpen]=useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = async (data) => {
   
    const newData={
      "tripId": `${id}`,
      "phoneNumber": data.phoneNumber,
      "numberOfPeople": data.numberOfPeople,
      "comment": data.comment
    }
    console.log(newData);
    try {
      // Отправка данных на сервер
      const response = await axios.post('https://phobic-honey-production.up.railway.app/api/bookings/book', newData);

      // Если запрос успешен, открываем BookedModal
      if (response.status === 200) {
        setActive(false)
        setOpen(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
    
  };
 
  
  return (
    <>
    
    {active && (
      <div className={`modal ${active ? 'active' : ''}`}>
      <div className="modal__overlay" >
        <form className='modal__content' onSubmit={handleSubmit(onSubmit)}  >
          <div className="modal__info">
            <p className='modal__info_p'>Info</p>
            <img src={close} alt="" className='modal__close' 
             onClick={(e) => {
            e.stopPropagation();
            setActive(false);
         
            }} />
          </div>
          <p className='modal__title'>
            To submit an application for a tour reservation, you need to fill in <br />
            your information and select the number of people for the <br />
            reservation
          </p>
          <div className="modal__phone">
            <p className="modal__phone-p">Phone number</p>
            <div className="modal__input">
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
              <PhoneInput
                className='modal__phone__input'
                placeholder="_ _ _ _ _ _ _ _ _"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                countries={['KZ', 'RU', 'KG']}
                international
              />
            )}
          />
               </div>
          </div>
          <div className="modal__commentari">
            <p className="modal__phone-p">Commentaries to trip</p>
            <Controller
              name="comment"
              control={control}
              defaultValue=""
              render={({ field }) => (
            <input 
              type="text" 
              placeholder='Write your wishes to trip...'
              className='modal__commentari__in'
              value={field.value}
            onChange={(e) => field.onChange(e.target.value)} />
            )}
            />
            
          </div>
          <div className="modal__people">
            <div className="modal__people__count">
            <Controller
             name="numberOfPeople"
             control={control}
             defaultValue={0}
             render={({ field }) => (
          <div className="modal__people__count">
            <button
              className='modal__people__btn'
              type="button"
              onClick={() => field.onChange(field.value - 1)}
            >
              -
            </button>
            <p>{field.value}</p>
            <button
              className='modal__people__btn'
              type="button"
              onClick={() => field.onChange(Math.min(field.value + 1, 6))}
            >
              +
            </button>
            <input type="hidden" {...field} />
          </div>
        )}
      />
            
            </div>
            <div className="modal__people__len">
              <img src={peopleSvg} alt="" className='modal__people__svg'/>
               <p className='modal__people__p'>{count} People</p>
            </div>
          </div>
          <button className='modal__submit' 
           type='submit'>
            Submit
            </button>
        </form>
      </div>
    </div>)}
    {open &&   <BookedModal setOpen={setOpen} /> }
    </>
    
  );
};

export default Modal;
