import React, { useState } from 'react'
import './style.css'
import SelectItem from './SelectItem';
import { ChevronUp } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeFab, resetFormSubmitted, setFormSubmitted } from '../../../redux/slice/fabSlice';

export default function Suggestion({setSelected,setIsOpen}) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch();
  dispatch(resetFormSubmitted()); //Reset the toast and status
  
  //you can also use formData as a redux state, define a reducer to set form data
  const [formData, setFormData] = useState({});
  const [value, setValue] = useState("Select");
  const [dropdown, setDropdown] = useState(false)

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    //close the fab and make a menu
    setSelected(null)
    document.querySelector('.fab-switch').classList.remove('open');

    dispatch(setFormSubmitted("Thanks for your valuable suggestion!"));
    dispatch(closeFab());

  }
  const handleInput = (e) => {
    const {name, file} = e.target;
    setFormData({...formData, [e.target.name] : e.target.value, value:value})
  }
  return (
    <div  className='selected-tab'>
      <form className='form-container' onSubmit={handleSubmit} action="">
        <h3 className='form-title'>Share your <span>Suggestions</span> with us for a chance to earn rewards</h3>

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
