import React from 'react'

import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

import './JobSeekerWidget.css'



function JobSeekerWidget() {
  return (
    <div className='jobSeekerWidget'>
        <h3>Job seeker guidance</h3>
        <h4>Recommended based on your activity</h4>
        <div className='jobSeekerWidget-ad'>
            <h5>I want to improve my resume</h5>
            <div></div>
        </div>
        <div className='jobSeekerWidget-btn'>
          <button>
              Show more
              <ArrowRightAltRoundedIcon/>
          </button>
        </div>
    </div>
  )
}

export default JobSeekerWidget