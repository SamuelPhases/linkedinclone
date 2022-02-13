import React from 'react'
import ProfileWidgetCard from '../components/ProfileWidgetCard'
import './FeedWidget.css'


function FeedWidget() {
  return (
    <div className='feedWidget'>
        <div className='feedWidget-header'>
            <h3>Add to your feed</h3>
            <div></div>
        </div>
        <div className='feedWidget'>
            <ProfileWidgetCard/>
            <ProfileWidgetCard/>
            <ProfileWidgetCard/>
        </div>
        <div className='feedWidget'>
            <h5>View all recommendations</h5>
            <div></div>
        </div>
    </div>
  )
}

export default FeedWidget