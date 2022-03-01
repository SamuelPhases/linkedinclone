import React from 'react'

import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import './NetworkCard.css'
import NetworkCardItem from './NetworkCardItem'

function NetworkCard() {
  return (
    <div className='networkCard'>
        <div className='networkCard-header'>
            <h4>Manage my network</h4>
        </div>
        <div className='networkCard-body'>
            <NetworkCardItem
              Icon={PeopleAltRoundedIcon}
              name='connections'
              number='300'
            />
            <NetworkCardItem
              Icon={ContactsRoundedIcon}
              name='contacts'
              number='230'
            />
            <NetworkCardItem
              Icon={EmojiPeopleRoundedIcon}
              name='people i follow'
              number='192'
            />
            <NetworkCardItem
              Icon={GroupWorkRoundedIcon}
              name='groups'
              number='10'
            />
            <NetworkCardItem
              Icon={EventRoundedIcon}
              name='events'
              number='10'
            />
            <NetworkCardItem
              Icon={EventNoteRoundedIcon}
              name='pages'
              number='282'
            />
            <NetworkCardItem
              Icon={MenuBookRoundedIcon}
              name='newsletters'
              number='20'
            />
            <NetworkCardItem
              name='hashtags'
              number='50'
            />
        </div>
        <div className='networkCard-footer'>
          <button>
            <h3>Show less</h3>
            <ExpandLessRoundedIcon/>
          </button>
        </div>
    </div>
  )
}

export default NetworkCard