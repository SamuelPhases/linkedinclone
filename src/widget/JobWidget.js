import React from 'react'
import JobCard from '../components/JobCard'
import './JobWidget.css'

function JobWidget() {
  return (
    <div className='jobWidget'>
        <div className='jobWidget-header'>
            <h3>Recommended for you</h3>
            <h4>Based on your profile and search history</h4>
        </div>
        <div className='jobWidget-body'>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
        </div>
    </div>
  )
}

export default JobWidget