import React from 'react'

export default function SelectItem({item, setValue, setDropdown}) {
  return (
    <div onClick={()=>{setValue(item);setDropdown(false)}} className='select-item'>{item}</div>
  )
}
