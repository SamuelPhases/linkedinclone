import React from 'react'
import './NetworkCardItem.css'




function NetworkCardItem({Icon,name,number}) {
  return (
    <div className='networkCardItem'>
        <div>
          {Icon ? <Icon/> : <h3>#</h3>}
          <h4>{name}</h4>
        </div>
        <h4>{number}</h4>
    </div>
  )
}

export default NetworkCardItem