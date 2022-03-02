import React from 'react'

import LinkIcon from '@material-ui/icons/Link';

import './ConnectCard.css'

function ConnectCard() {
  return (
    <div className='connectCard'>
        <div className='connectCard-header'>
            <div className='connectCard-header__bg'></div>
            <div className='connectCard-header__dp'></div>
        </div>
        <h3>Isaac Elijah</h3>
        <h4>Lead Project Manager | PERN | MERN Software | MERNG Software</h4>
        <div className='connectCard-info'>
            <div>
                <LinkIcon/>
                <p>18 mutual connections</p>
            </div>
            {/* <div>
                <p>Caltech Princeton</p>
            </div> */}
            <button>connect</button>
        </div>
    </div>
  )
}

export default ConnectCard