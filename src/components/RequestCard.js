import React from 'react'


import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

import './RequestCard.css'


function RequestCard({invite}) {
  return (
    <div className='requestCard'>
        <div className='requestCard-info'>
            <div className='requestCard-info__dp'></div>
            <div className='requestCard-info__name'>
                {
                    invite ? (
                        <>
                            <h3>Blessed Israel</h3>
                            <h4>Master of Information Technology - MIT </h4>
                            <h5>Anuoluwapo Adesina and 77 others</h5>
                        </>
                    ) : (
                        <>
                        <div className='requestCard-news'>
                            <h4>Newsletter</h4>
                            <FiberManualRecordRoundedIcon/>
                            <h4>Weekly</h4>
                        </div>
                        <h3><strong>Anthonia</strong> invited you to subscribe to <strong>TEDx</strong></h3>
                        </>
                    )
                }
            </div>
        </div>
        <div className='requestCard-req'>
            <button>ignore</button>
            <button>accept</button>
        </div>
    </div>
  )
}

export default RequestCard