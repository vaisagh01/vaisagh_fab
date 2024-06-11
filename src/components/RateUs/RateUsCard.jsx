import React, { useState } from 'react'
import './RateUsCard.css'
import { X, StarIcon } from 'lucide-react'

export default function RateUsCard() {
  const [isOpen, setIsOpen] = useState(true)
  setTimeout(() => {
    setIsOpen(false)
  }, 2000);
  clearTimeout()
  const handleRating = (e) => {
    e.target.classList.toggle("checked")
  }
  return (
    <>
    {
      isOpen &&
        <div className='card-container'>
        <button className='close-button'><X/></button>
        <div className='main'>
          <h4 className='title'>Rate your experience with us!</h4>
          <div className='ratings'>
            <StarIcon onClick={handleRating} className='star' />
            <StarIcon onClick={handleRating} className='star'  />
            <StarIcon onClick={handleRating} className='star' />
            <StarIcon onClick={handleRating} className='star'  />
            <StarIcon onClick={handleRating} className='star'  />
          </div>
        </div>
      </div>
    }
    </>
  )
}
