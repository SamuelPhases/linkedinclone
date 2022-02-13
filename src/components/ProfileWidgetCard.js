import React from 'react'
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
                <p>follow</p>
            </button>
        </div>
    </div>
  )
}

export default ProfileWidgetCard