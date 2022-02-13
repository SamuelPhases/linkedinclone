import React from 'react'
import './ConnectCard.css'

function ConnectCard() {
  return (
    <div className='connectCard'>
        <div className='connectCard-header'>
            <div className='connectCard-header__bg'></div>
            <div className='connectCard-header__dp'></div>
        </div>
        <h3>Isaac Elijah</h3>
        <h4>Lead Project Manager | PERN | MERN Software</h4>
        <div className='connectCard-info'>
            <div>
                <p>18 mutual connections</p>
            </div>
            <div>
                <p>Caltech Princeton</p>
            </div>
        </div>
        <button>connect</button>
    </div>
  )
}

export default ConnectCard