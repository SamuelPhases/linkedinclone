import React from 'react'
import './JobSeekerWidget.css'



function JobSeekerWidget() {
  return (
    <div className='jobSeekerWidget'>
        <h3>Job seeker guidance</h3>
        <h5>Recommended based on your activity</h5>
        <div className='jobSeekerWidget-ad'>
            <h5>I want to improve my resume</h5>
            <div></div>
        </div>
        <button>
            <h4>Show more</h4>
        </button>
    </div>
  )
}

export default JobSeekerWidget