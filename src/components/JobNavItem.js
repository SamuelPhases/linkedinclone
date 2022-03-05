import React from 'react'

import './JobNavItem.css'



function JobNavItem({Icon,name}) {
  return (
    <div className='jobNavItem'>
      <Icon/>
      <h4>{name}</h4>
    </div>
  )
}

export default JobNavItem