import React from 'react'
import RecentJobCard from '../components/RecentJobCard'
import './RecentJobWidget.css'



function RecentJobWidget() {
  return (
    <div className='recentJobWidget'>
        <div className='recentJobWidget-header'>
            <h3>Recent job searches</h3>
            <button>Clear</button>
        </div>
        <div className='recentJobWidget-body'>
            <RecentJobCard/>
            <RecentJobCard/>
            {/* <RecentJobCard/> */}
        </div>
    </div>
  )
}

export default RecentJobWidget