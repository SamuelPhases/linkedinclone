import React from 'react'

import AvTimerRoundedIcon from '@material-ui/icons/AvTimerRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import './JobCard.css'



function JobCard() {
  return (
    <div className='jobCard'>
        <div className='jobCard-flex'>
            <div className='jobCard-dp'></div>
            <div className='jobCard-info'>
                <button type='button'>
                    <h3>Software Engineer (Fully Remote)</h3>
                </button>
                <h4>ActTalented</h4>
                <h4>Silicon Valley (Remote)</h4>
                <h5>$130K/yr - $200K/yr</h5>
                <div>
                    <AvTimerRoundedIcon/>
                    <h6>Actively recruiting</h6>
                </div>
                <div>
                    <h5>1 hour ago</h5>
                    <div>
                        <FiberManualRecordRoundedIcon/>
                    </div>
                    <div>
                        <h5>Easy Apply</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className='jobCard-note'>
            {/* <button type='button'><VisibilityRoundedIcon/></button> */}
            <button type='button'><VisibilityOffRoundedIcon/></button>
            <button type='button'><BookmarkBorderRoundedIcon/></button>
            {/* <button type='button'><BookmarkRoundedIcon/></button> */}
        </div>
    </div>
  )
}

export default JobCard