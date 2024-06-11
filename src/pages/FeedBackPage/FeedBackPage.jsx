import React from 'react'
import './FeedBackPage.css'
import FabDrawer from '../../components/FabDrawer/FabDrawer';
import { useSelector } from 'react-redux';
import RateUsCard from '../../components/RateUs/RateUsCard';

//tweek the options to configure the items you want on the fab
const options=['ContactUs','Suggestion','ReportIssue','FeedBack']

export default function FeedBackPage() {
  const isOpen = useSelector(state => state.fab.isOpen)
  
  return (
    <div>
      <FabDrawer options={options}/>
    </div>
  )
}
