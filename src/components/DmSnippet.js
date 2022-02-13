import React, { useState } from 'react'
import './DmSnippet.css'


function DmSnippet() {

    const[user,setUser] = useState('Alex')

  return (
    <div className='dmSnippet'>
        <div className='dmSnippet-container'>
            <div className='dmSnippet-dp'></div>
            <div className='dmSnippet-content'>
                <div className='dmSnippet-content__header'>
                    <h5>Israel Blessed</h5>
                    <h5>11:30 am</h5>
                </div>
                <div className='dmSnippet-content__body'>
                    <p>{!user ? user : 'You'  }: Good to hear, thanks. God bless you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DmSnippet