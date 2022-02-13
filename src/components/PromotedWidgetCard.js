import React from 'react'
import './PromotedWidgetCard.css'


function PromotedWidgetCard() {
  return (
    <div className='promotedWidgetCard'>
        <div className='promotedWidgetCard-img'></div>
        <div className='promotedWidgetCard-details'>
            <h4>DevOps starts with CI</h4>
            <div>
                <h6>See why CircleCI is the most popular Github integration.</h6>
            </div>
        </div>
    </div>
  )
}

export default PromotedWidgetCard