import React, { useEffect, useState } from 'react'
import './Toast.css'
export default function Toast({message}) {
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    const timeoutId =  setTimeout(() => {
      setVisible(false)
    }, 5000);
    return () => clearTimeout(timeoutId);
  },[])
  return (
    <div>
      {
        visible && 
        <div className='toast-container'> 
            <div className='toast-pointer'></div>
            <p className='toast-message'>{message}</p>
        </div>
      }
    </div>
  )
    
}
