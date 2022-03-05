import React from 'react'

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import SettingsInputCompositeRoundedIcon from '@material-ui/icons/SettingsInputCompositeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import DmSnippet from '../components/DmSnippet'
import './DmWidget.css'



function DmWidget() {
  return (
    <div className='dmWidget'>
        <div className='dmWidget-header'>
            <div className='dmWidget-header__title'>
                <div className='dmWidget-header__title-dp'>
                </div>
                <h4>messaging</h4>
            </div>
            <div className='dmWidget-header__icons'>
                <button>
                    <MoreHorizRoundedIcon/>
                </button>
                <button>
                    <PostAddRoundedIcon/>
                </button>
                <button>
                    <ExpandMoreRoundedIcon/>
                </button>
            </div>
        </div>
        <div className='dmWidget-search'>
            <form className='dmWidget-searchInput'>
                <label htmlFor='search-messages'>
                    <SearchRoundedIcon/>
                </label>
                <input placeholder='Search messages' id='search-messages' name='search-messages'  />
                <button>
                    <SettingsInputCompositeRoundedIcon/>
                </button>
            </form>
        </div>
        <div className='dmWidget-messageList'>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
            <DmSnippet/>
        </div>
    </div>
  )
}

export default DmWidget