import React from 'react'
import './DmWidget.css'



function DmWidget() {
  return (
    <div className='dmWidget'>
        <div className='dmWidget-header'>
            <div className='dmWidget-header__title'>
                <div className='dmWidget-header__title-dp'>
                </div>
                <h4>messaging</h4>
            </div>
            <div className='dmWidget-header__icons'>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
        <div className='dmWidget-search'>
            <label htmlFor='search-messages'></label>
            <input placeholder='Search messages' id='search-messages' name='search-messages'  />
            <div></div>
        </div>
        <div className='dmWidget-messageList'></div>
    </div>
  )
}

export default DmWidget