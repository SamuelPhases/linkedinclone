import React, { useState } from 'react'

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import ScreenShareRoundedIcon from '@material-ui/icons/ScreenShareRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import CommentCard from './CommentCard'
import './Post.css'

function Post({edited}) {

    const[less,setLess] = useState(true)
    
  return (
    <div className='post'>
        <div className='post-header__toggler'>
            <MoreHorizRoundedIcon />
        </div>
        <div className='post-header'>
            <div className='post-header__dp'></div>
            <div className='post-header__info'>
                <div className='post-header__info-id'>
                    <h5>Lore Truth</h5>
                    <div>
                        <FiberManualRecordRoundedIcon />
                    </div>
                    <h6>Following</h6>
                </div>
                <div className='post-header__info-title'>
                    <h6>Global People & Culture Shaper | Confidence & Executive Leadership Coach. Author. Spea</h6>
                    <button>
                        <AddRoundedIcon/>
                        <h4>Follow</h4>
                    </button>
                </div>
                <div className='post-header__time'>
                    <h6>1min</h6>
                    <div className='post-header__dot'>
                        <FiberManualRecordRoundedIcon />
                    </div>
                    {edited && <h6>Edited</h6>}
                    <div className='post-header__round'>
                        <PublicRoundedIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className='post-text'>
            <p>A word for someone. It only leads to stunted growth. Get out of your comfort zone. Your future self is calling.</p>
            {
                less && <div className='post-moreBtn'><button>...see more</button></div>
            }
        </div>
        <div className='post-media'>

        </div>
        <div className='post-fav__container'>
            <div className='post-fav'>
                <div className='post-fav__icons'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>Abraham Lincoln and 90 others</p>
                </div>
                <p className='post-fav__comments'>10 comments</p>
            </div>
        </div>
        <div className='post-footer'>
            <div className='post-footer__btn'>
                <button>
                    <div>
                        <ThumbUpRoundedIcon/>
                    </div>
                    <h4>like</h4>
                </button>
                <button>
                    <div>
                        <ChatRoundedIcon/>
                    </div>
                    <h4>comment</h4>
                </button>
                <button>
                    <div>
                        <ScreenShareRoundedIcon/>
                    </div>
                    <h4>share</h4>
                </button>
                <button>
                    <div>
                        <SendRoundedIcon/>
                    </div>
                    <h4>send</h4>
                </button>
            </div>
            <div className='post-footer__inputComment'>
                <div className='post-footer__dp'></div>
                <form className='post-footer__input'>
                    <input className='post-footer__inputPrimary' placeholder='Add a comment' />
                    <div className='post-footer__iconBtn'>
                        <div className='post-footer__emoji'>
                            <InsertEmoticonRoundedIcon/>
                        </div>
                        <div className='post-footer__img'>
                            <label htmlFor='picture'>
                                <ImageRoundedIcon/>
                            </label>
                            <input className='post-footer__inputSecondary' type='file' placeholder='Add a comment' id='picture' name='picture' />
                        </div>
                    </div>
                </form>
            </div>
            <div className='post-footer__commentList'>
                <button>
                    <h4>Most relevant</h4>
                    <ArrowDropDownRoundedIcon/>
                </button>
                <div className='post-footer__commentListItems'>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                </div>
                <button>Load more comments</button>
            </div>
        </div>
    </div>
  )
}

export default Post