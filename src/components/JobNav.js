import React from 'react'
import './JobNav.css'
import JobNavItem from './JobNavItem'

function JobNav() {
  return (
    <div className='jobNav'>
        <nav className='jobNav'>
            <JobNavItem/>
            <JobNavItem/>
            <JobNavItem/>
            <JobNavItem/>
            <JobNavItem/>
        </nav>
        <button>
            <h5>Post a free job</h5>
        </button>
    </div>
  )
}

export default JobNav