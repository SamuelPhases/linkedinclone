import React from 'react'
import './JobCard.css'



function JobCard() {
  return (
    <div className='jobCard'>
        <div className='jobCard-dp'></div>
        <div className='jobCard-info'>
            <h3>Software Engineer (Fully Remote)</h3>
            <h4>ActTalented</h4>
            <h4>Silicon Valley (Remote)</h4>
            <div>
                <h6>Actively recruiting</h6>
            </div>
            <div>
                <h5>1 hour ago</h5>
                <div>
                    <h5>Easy Apply</h5>
                </div>
            </div>
        </div>
        <div className='jobCard-save'></div>
    </div>
  )
}

export default JobCard