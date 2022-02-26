import React from 'react'

import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './InputWidget.css'

function InputWidget() {
  return (
    <div className='inputWidget'>
        <div className='inputWidget-container'>
            <div className='inputWidget-container__row'>
                <div  className='inputWidget-dp'></div>
                <div className='inputWidget-inputBox'>
                    <h4>Start a post</h4>
                </div>
            </div>
            <div className='inputWidget-container__row'>
                <button>
                    <div>
                        <ImageIcon/>
                    </div>
                    <h4>Photo</h4>
                </button>
                <button>
                    <div>
                        <YouTubeIcon/>
                    </div>
                    <h4>Video</h4>
                </button>
                <button>
                    <div>
                        <DateRangeIcon/>
                    </div>
                    <h4>Event</h4>
                </button>
                <button>
                    <div>
                        <AssignmentIcon/>
                    </div>
                    <h4>Write article</h4>
                </button>
            </div>
        </div>
    </div>
  )
}

export default InputWidget