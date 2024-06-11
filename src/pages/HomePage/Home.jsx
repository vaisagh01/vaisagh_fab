import React from 'react'
import { NavLink } from 'react-router-dom'
import FabDrawer from '../../components/FabDrawer/FabDrawer'

//Tween setting to show only desired FAB items
const options = [
  'ContactUs', 'Suggestion'
]

export default function Home() {
  return (
    <div>
      This is the home page. 
      <NavLink to={'/feedback'}>Go to Feedback page</NavLink>

      
      <FabDrawer options={options}/>
    </div>
  )
}
