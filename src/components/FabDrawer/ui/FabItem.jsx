import React from 'react'

export default function FabItem({name, label, selected, setSelected}) {
  
  const handleClick = (name) => {
    setSelected(name)
    document.querySelector('.fab-button-container').classList.add('selected');
    if(selected===null){
      document.querySelector('.fab-switch').classList.add('selected');
    }
  }

  return (
    <div className='fab-window'>
      <div onClick={()=>handleClick(name)} className='fab-item'>
        { !selected &&  <div className='fab-item-label'>{label}</div> }
        <img className='fab-icon' style={selected===name ? {border:'2px solid gray'} : null} src={`/${name}.png`} alt="" />
      </div>
    </div>
  )
}
