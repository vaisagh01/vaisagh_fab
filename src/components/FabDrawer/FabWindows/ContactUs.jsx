import React, { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFormSubmitted, resetFormSubmitted, closeFab } from '../../../redux/slice/fabSlice';
import Toast from '../../Toast/Toast';

export default function ContactUs({setSelected}) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  dispatch(resetFormSubmitted()); //Reset the toast and status
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //close the fab and make a menu
    setSelected(null)
    document.querySelector('.fab-switch').classList.remove('open');

    //set success message and toast
    dispatch(setFormSubmitted("Thanks for reaching out to us! We will get back to you as soon as possible"));
    dispatch(closeFab());
  }
  const handleInput = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  return (
    <div className='selected-tab'>
      <form className='form-container' onSubmit={handleSubmit} action="">
        <h3 className='form-title'>Get in <span>Contact with us</span> for your queries!</h3>

        <div className="divider"></div>

        <div className='form-input-container'>
          <label className='form-input-label' htmlFor="">Your Name <span style={{color:'magenta'}}>*</span></label>
          <input required className='form-input' onChange={handleInput} type="text" name='name' placeholder='Enter your Name' />
        </div>

        {
          !isLoggedIn && 
            <div className='form-input-container'>
              <label className='form-input-label' htmlFor="">Your Email <span style={{color:'magenta'}}>*</span></label>
              <input required className='form-input' onChange={handleInput}  type="email" name='email' placeholder='Enter your Email' />
            </div>
        }
        {
          !isLoggedIn && 
            <div className='form-input-container'>
              <label className='form-input-label' htmlFor="">Your Mobile Number</label>
              <input className='form-input' onChange={handleInput}  type="number" name='number' placeholder='Enter your number' />
            </div>
        }


        <div className='form-input-container'>
          <label className='form-input-label' htmlFor="">What would you like to ask? <span style={{color:'magenta'}}>*</span></label>
          <textarea required className='form-textarea' onChange={handleInput}  type="text" name='query' placeholder='Write here' />
        </div>
        <button type='submit' className='form-submit'>Submit</button>
      </form>
    </div>
  )
}
