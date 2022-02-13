import React from 'react'
import './ProfileWidget.css'


function ProfileWidget() {
  return (
    <div className='profileWidget'>
      <div className='profileWidget-info'>
        <div className='profileWidget-info__header'>
          <div className='profileWidget-info__header-wallpaper'>
            <div className='profileWidget-info__bg'></div>
            <div className='profileWidget-info__dp'></div>
          </div>
        </div>
        <div className='profileWidget-info__body'>
          <h3>Isaac Justin</h3>
          <h6>Software Developer at Calitech</h6>
        </div>
      </div>
      <div className='profileWidget-view'>
        <div>
          <p>Who viewed your profile</p>
          <p>1,000</p>
        </div>
        <div>
          <p>Views of your post</p>
          <p>1,205</p>
        </div>
      </div>
      <div className='profileWidget-exclusive'>
        <h6>Access exclusive tools & insights</h6>
        <div>
          <div className='profileWidget-exclusive__icon'>
          </div>
          <h5>Get hired faster, try premium free</h5>
        </div>
      </div>
      <div className='profileWidget-items'>
        <div></div>
        <h5>My items</h5>
      </div>
    </div>
  )
}

export default ProfileWidget