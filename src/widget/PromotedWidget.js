import React from 'react'
import PromotedWidgetCard from '../components/PromotedWidgetCard'
import './PromotedWidget.css'

function PromotedWidget() {
  return (
    <div className='promotedWidget'>
        <div className='promotedWidget-header'>
            <h3>promoted</h3>
        </div>
        <div className='promotedWidget-body'>
          <PromotedWidgetCard/>
          <PromotedWidgetCard/>
          <PromotedWidgetCard/>
        </div>
    </div>
  )
}

export default PromotedWidget