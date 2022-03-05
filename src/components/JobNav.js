import React from 'react'

import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import WebAssetRoundedIcon from '@material-ui/icons/WebAssetRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './JobNav.css'
import JobNavItem from './JobNavItem'

function JobNav() {
  return (
    <div className='jobNav'>
        <nav className='jobNav-items'>
            <JobNavItem Icon={BookmarkRoundedIcon} name='my jobs' />
            <JobNavItem Icon={NotificationsRoundedIcon} name='job alerts' />
            <JobNavItem Icon={LocalAtmRoundedIcon} name='salary' />
            <JobNavItem Icon={AssignmentTurnedInRoundedIcon} name='skill assessments' />
            <JobNavItem Icon={WebAssetRoundedIcon} name='interview prep' />
            <JobNavItem Icon={InsertDriveFileRoundedIcon} name='resume builder' />
            <JobNavItem Icon={YouTubeIcon} name='job seeker guidance' />
            <JobNavItem Icon={SettingsIcon} name='application settings' />
        </nav>
        <button>
          <PostAddRoundedIcon/>
          <h5>Post a free job</h5>
        </button>
    </div>
  )
}

export default JobNav