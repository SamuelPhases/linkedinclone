import React, { useState } from 'react'

import ArchiveRoundedIcon from '@material-ui/icons/ArchiveRounded';
import MarkunreadOutlinedIcon from '@material-ui/icons/MarkunreadOutlined';
import MarkunreadRoundedIcon from '@material-ui/icons/MarkunreadRounded';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';

import './DmSnippet.css'


function DmSnippet() {

    const[user,setUser] = useState('Alex')

  return (
    <div className='dmSnippet'>
        <div className='dmSnippet-container'>
            <div className='dmSnippet-dp'>
                <div className='dmSnippet-dpImg'></div>
                <div className='dmSnippet-dpIcon'>
                    <CheckBoxOutlineBlankRoundedIcon/>
                    {/* <CheckBoxRoundedIcon/> */}
                </div>
            </div>
            <div className='dmSnippet-content'>
                <div className='dmSnippet-content__header'>
                    <h5>Israel Blessed</h5>
                    <h5>11:30 am</h5>
                    <div>
                        <div>
                            <MarkunreadOutlinedIcon/>
                        </div>
                        <div>
                            <ArchiveRoundedIcon/>
                        </div>
                    </div>
                </div>
                <div className='dmSnippet-content__body'>
                    <p>{!user ? user : 'You'  }: Good to hear, thanks. God bless you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DmSnippet