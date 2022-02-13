import React from 'react'
import RequestCard from '../components/RequestCard'
import './InvitationWidget.css'



function InvitationWidget() {
  return (
    <div className='invitationWidget'>
        <div className='invitationWidget-header'>
            <h4>Invitations</h4>
            <button>See all 200</button>
        </div>
        <div className='invitationWidget-body'>
            <RequestCard/>
            <RequestCard/>
            <RequestCard/>
        </div>
        <button className='invitationWidget-btn'>Show more</button>
    </div>
  )
}

export default InvitationWidget