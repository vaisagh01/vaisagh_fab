import React, { useState } from 'react'
import './FabDrawer.css'
import FabItem from './ui/FabItem'
import FabButton from './ui/FabButton';
import ContactUs from './FabWindows/ContactUs'
import Suggestion from './FabWindows/Suggestion'
import ReportIssue from './FabWindows/ReportIssue'
import Feedback from './FabWindows/Feedback'
import Toast from '../Toast/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { closeFab, openFab } from '../../redux/slice/fabSlice';

const drawer = [
  {
    name: 'ReportIssue',
    label: 'Report an issue',
  },
  {
    name: 'FeedBack',
    label: 'Share a Feedback',
  },
  {
    name: 'Suggestion',
    label: 'Give suggestions',
  },
  {
    name: 'ContactUs',
    label: 'Contact us'
  },

]

/** Assumptions 
|--------------------------------------------------
| Assumtions: 
| 1. Could not add proper ring(when selected) around the icons as asked in the instruction 
     because the icons imported from figma had a bit of padding around it and it interefered 
     with the ring while selected or while hovering.
  2. Assumed that we use redux and the state of user either logged in or not can be tweeked
     in redux user slice. 
  3. The submission form has been set in a state and can be handled/ as per requirement. 
  4. The required options for fab items are given as props (list). Can be changed to object or
     string as per requirement. 
  5. 
|--------------------------------------------------
*/

export default function FabDrawer({options}) {

  const {formSubmitted,successMessage, isOpen} = useSelector(state => state.fab)
  const dispatch = useDispatch();

  //selected will be the selected item from the fab items
  const [selected, setSelected] = useState(null)

  //filtering the drawer items to show only required items
  const filtered = drawer.filter(item => options.includes(item.name))

  //render function to switch between items
  const renderWindow = (selected) => {
    switch (selected) {
      case 'ContactUs':
        if(selected==='ContactUs') return <ContactUs setSelected={setSelected}/>;
      case 'Suggestion':
        if(selected==='Suggestion') return <Suggestion setSelected={setSelected}/>;
      case 'ReportIssue':
        if(selected==='ReportIssue') return <ReportIssue setSelected={setSelected}/>;
      case 'FeedBack':
        if(selected==='FeedBack') return <Feedback setSelected={setSelected}/>;
      default:
        break;
    }
  }
  
  const handleOpenFAB = () => {
    if(isOpen) {
      dispatch(closeFab());
    }else {
      dispatch(openFab());
    }
    setSelected(null)
    
    // to toggle the fab
    document.querySelector('.fab-switch').classList.toggle('open');
    // to remove flex direction row property from switch icons
    document.querySelector('.fab-switch').classList.remove('selected');
    //to remove flex direction row property from button container
    document.querySelector('.fab-button-container').classList.remove('selected');

    // document.getElementById('.wrapper').classList.add('.overlay')
  }
  setTimeout(() => {
    if(isOpen){
      document.querySelector('.wrapper').classList.add('overlay')
    } else{
      document.querySelector('.wrapper').classList.remove('overlay')
    }
  }, 10);
  
  return (
    <div className='fab-container'>

      { formSubmitted && <Toast message={successMessage} /> }

      <div className='fab-window'>    
        {renderWindow(selected)} 
      </div>

      <div className='fab-button-container'>
        <div className='fab-switch'>
          {
            filtered.map((item, index) => {
              return <FabItem 
                        key={index} 
                        name={item.name} 
                        label={item.label} 
                        selected={selected} 
                        setSelected={setSelected}/>
              })
          }
        </div>
        <FabButton handleOpenFAB={handleOpenFAB} />
      </div>

    </div>
  )
}
