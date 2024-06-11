import React, { useState } from 'react'
import SelectItem from './SelectItem';
import { ChevronUp } from 'lucide-react';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { closeFab, resetFormSubmitted, setFormSubmitted } from '../../../redux/slice/fabSlice';


export default function ReportIssue({setSelected,setIsOpen}) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const [formData, setFormData] = useState({});
  const [dropdown, setDropdown] = useState(false)
  const [value, setValue] = useState("Select");
  const dispatch = useDispatch();
  dispatch(resetFormSubmitted()); //Reset the toast and status
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    //close the fab and make a menu
    setSelected(null)
    document.querySelector('.fab-switch').classList.remove('open');
    
    dispatch(setFormSubmitted("Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!"));
    dispatch(closeFab());
  }
  const handleInput = (e) => {
    const {name, file} = e.target;
    setFormData({...formData, [e.target.name] : e.target.value, value:value})
  }

  return (
    <div  className='selected-tab'>
      <form className='form-container' onSubmit={handleSubmit} action="">
        <h3 className='form-title'>Let us know about the <span>issue</span> you are facing right now!</h3>
        
        <div className="divider"></div>

        <label className='form-input-label' htmlFor="">Choose a section</label>
        <div className='select-container'>
          <div className='select' onClick={()=>{setDropdown(!dropdown)}}>
            <p>{value}</p>
            {
              dropdown ? <ChevronUp style={{rotate:'0deg', transition:'rotate 0.5s'}} /> : <ChevronUp style={{rotate:'180deg', transition:'rotate 0.5s'}} />
            }
          </div>
          {
            dropdown &&
            <div className='select-dropdown'>
              <SelectItem item={"Content Cards"} setDropdown={setDropdown} setValue={setValue} />
              <SelectItem item={"Interview Questions"} setDropdown={setDropdown} setValue={setValue} />
              <SelectItem item={"Practise Questions"} setDropdown={setDropdown} setValue={setValue} />
              <SelectItem item={"Quizzes"} setDropdown={setDropdown} setValue={setValue} />
              <SelectItem item={"Other"} setDropdown={setDropdown} setValue={setValue} />
            </div>
          }
        </div>


        <label className='form-input-label' htmlFor="">Describe the suggestion in detail <span style={{color:'magenta'}}>*</span></label>
        <div className='form-text-container'>
          <textarea required className='form-textarea' onChange={handleInput}  type="text" name='query' placeholder='Write here' />
          <input className='form-file' type="file"name='file' onChange={handleInput} />
        </div>
        {
          !isLoggedIn && 
            <div className='form-input-container'>
              <label className='form-input-label' htmlFor="">Enter yout email to receive an update <span style={{color:'magenta'}}>*</span></label>
              <input required className='form-input' onChange={handleInput}  type="email" name='email' placeholder='Enter your Email' />
            </div>
        }
        <button type='submit' className='form-submit'>Submit</button>
      </form>
    </div>
  )
}
