import React, { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { closeFab, resetFormSubmitted, setFormSubmitted } from '../../../redux/slice/fabSlice';

export default function Feedback({setSelected}) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  dispatch(resetFormSubmitted()); //Reset the toast and status
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    //close the fab and make a menu
    setSelected(null)
    document.querySelector('.fab-switch').classList.remove('open');

    dispatch(setFormSubmitted("Thanks for your valuable feedback!"));
    dispatch(closeFab());

  }
  const handleInput = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  return (
    <div  className='selected-tab'>
      <form className='form-container' onSubmit={handleSubmit} action="">
        <h3 className='form-title'>Let us know your  <span>Feedback</span> about us!</h3>

        <div className="divider"></div>

        <label className='form-input-label' htmlFor="">Describe the suggestion in detail <span style={{color:'magenta'}}>*</span></label>
        <div className='form-text-container'>
          <textarea required className='form-textarea' onChange={handleInput}  type="text" name='query' placeholder='Write here' />
          <input className='form-file' type="file"name='file' onChange={handleInput} />
        </div>
        {
          !isLoggedIn ?
            <div className='form-input-container'>
              <label className='form-input-label' htmlFor="">Enter yout email to receive an update <span style={{color:'magenta'}}>*</span></label>
              <input required className='form-input' onChange={handleInput}  type="email" name='email' placeholder='Enter your Email' />
            </div>
            :
            <div className='form-checkbox-container'>
              <input type="checkbox" name="anonymous" />
              <label htmlFor="anonymous">Send feedback anonymously</label>
            </div>
        }
        <button type='submit' className='form-submit'>Submit</button>
      </form>
    </div>
  )
}
