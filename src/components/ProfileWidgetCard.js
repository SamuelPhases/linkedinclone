import React from 'react'

import AddRoundedIcon from '@material-ui/icons/AddRounded';

import './ProfileWidgetCard.css'

function ProfileWidgetCard() {
  return (
    <div className='profileWidgetCard'>
        <div className='profileWidgetCard-dp'>
            <div className='profileWidgetCard-dp__img'></div>
        </div>
        <div className='profileWidgetCard-info'>
            <h4>Abraham Jacob</h4>
            <h5>Chief Financial Officer</h5>
            <button>
              <AddRoundedIcon/>
              <h4>follow</h4>
            </button>
        </div>
    </div>
  )
}

export default ProfileWidgetCard