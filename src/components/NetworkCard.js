import React from 'react'
import './NetworkCard.css'
import NetworkCardItem from './NetworkCardItem'

function NetworkCard() {
  return (
    <div className='networkCard'>
        <div className='networkCard-header'>
            <h4>manage my network</h4>
        </div>
        <div className='networkCard-body'>
            <NetworkCardItem/>
            <NetworkCardItem/>
            <NetworkCardItem/>
            <NetworkCardItem/>
        </div>
        <button>Show less</button>
    </div>
  )
}

export default NetworkCard