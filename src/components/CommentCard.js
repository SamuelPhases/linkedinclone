import React from 'react'

import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

import './CommentCard.css'


function CommentCard() {
  return (
    <div className='commentCard'>
        <div className='commentCard-dp'>
            <div className='commentCard-dp__img'></div>
            <div className='commentCard-dp__status'></div>
        </div>
        <div className='commentCard-body__container-flex'>
            <div className='commentCard-body__container'>
                <div className='commentCard-body'>
                    <div className='commentCard-body__header'>
                        <div className='commentCard-body__header-info'>
                            <h5>Linus Lincoln</h5>
                            <div className='commentCard-body__header-infoIcon'>
                                <FiberManualRecordRoundedIcon/>
                            </div>
                            <h5>1st</h5>
                        </div>
                        <div className='commentCard-body__header-time'>
                            <h6>1s</h6>
                            <div className='commentCard-body__header-timeIcon'>
                                <MoreHorizRoundedIcon/>
                            </div>
                        </div>
                    </div>
                    <h6>Creative Programmer | Creative Designer | Creative Programmer | Creative Designer | Creative Programmer | Creative Designer</h6>
                    <p>A Creative Programmer and Designer  wow A Creative Programmer and Designer  wow A Creative Programmer and Designer  wow</p>
                </div>
            </div>
            <div  className='commentCard-body__btns'>
                <div  className='commentCard-body__btns-like'>
                    <button>like</button>
                    <FiberManualRecordRoundedIcon/>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>55</p>
                </div>
                <div  className='commentCard-body__btns-reply'>
                    <button>reply</button>
                    <FiberManualRecordRoundedIcon/>
                    <p>40 replies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentCard