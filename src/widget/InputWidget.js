import React from 'react'
import './InputWidget.css'

function InputWidget() {
  return (
    <div clasName='inputWidget'>
        <div clasName='inputWidget-container'>
            <div clasName='inputWidget-container__row'>
                <div  className='='inputWidget-dp></div>
                <input placeholder='Start a post' />
            </div>
            <div clasName='inputWidget-container__row'>
                <button>
                    <div></div>
                    <h4>Photo</h4>
                </button>
                <button>
                    <div></div>
                    <h4>Video</h4>
                </button>
                <button>
                    <div></div>
                    <h4>Event</h4>
                </button>
                <button>
                    <div></div>
                    <h4>Write article</h4>
                </button>
            </div>
        </div>
    </div>
  )
}

export default InputWidget