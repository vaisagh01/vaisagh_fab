import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function FabButton({handleOpenFAB}) {
  const isOpen = useSelector(state => state.fab.isOpen)
  const [icon, setIcon] = useState("FAB")
  
  return (
    <div>
      <button onClick={handleOpenFAB} className='fab-button'>
        {
          isOpen ?
            <img className='fab-icon' src="/Close.png" alt="" />
            :
            <img className='fab-icon' src={`/FAB.png`}  alt="" />
        }
      </button>
    </div>
  )
}
