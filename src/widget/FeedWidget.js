import React from 'react'


import InfoIcon from '@material-ui/icons/Info';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import ProfileWidgetCard from '../components/ProfileWidgetCard'
import './FeedWidget.css'


function FeedWidget() {
  return (
    <div className='feedWidget'>
        <div className='feedWidget-header'>
            <h3>Add to your feed</h3>
            <div>
              <InfoIcon />
            </div>
        </div>
        <div className='feedWidget-body'>
          <ProfileWidgetCard/>
          <ProfileWidgetCard/>
          <ProfileWidgetCard/>
        </div>
        <div className='feedWidget-footer'>
          <h5>View all recommendations</h5>
          <div>
            <ArrowRightAltRoundedIcon/>
          </div>
        </div>
    </div>
  )
}

export default FeedWidget