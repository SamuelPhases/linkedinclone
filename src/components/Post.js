import React, { useState } from 'react'
import CommentCard from './CommentCard'
import './Post.css'

function Post({edited}) {

    const[less,setLess] = useState(true)

  return (
    <div className='post'>
        <div className='post-header'>
            <div className='post-header__dp'></div>
            <div className='post-header__info'>
                <div className='post-header__info-id'>
                    <h5>Lore Truth</h5>
                    <h5>Following</h5>
                </div>
                <h6>Global People & Culture Shaper | Confidence & Executive Leadership Coach. Author. Spea</h6>
                <div className='post-header__time'>
                    <h6>1min</h6>
                    <div></div>
                    {edited && <h6>Edited</h6>}
                    <div></div>
                </div>
            </div>
        </div>
        <div className='post-text'>
            <p>A word for someone. It only leads to stunted growth. Get out of your comfort zone. Your future self is calling.</p>
            {less && <button>...see more</button>}
        </div>
        <div className='post-media'>

        </div>
        <div className='post-fav'>
            <div className='post-fav__icons'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>90</p>
            </div>
            <p className='post-fav__comments'>10 comments</p>
        </div>
        <div className='post-footer'>
            <div className='post-footer__btn'>
                <button>
                    <h4>like</h4>
                </button>
                <button>
                    <h4>comment</h4>
                </button>
                <button>
                    <h4>share</h4>
                </button>
                <button>
                    <h4>send</h4>
                </button>
            </div>
            <div className='post-footer__inputComment'>
                <div className='post-footer__dp'></div>
                <form className='post-footer__input'>
                    <input className='post-footer__inputPrimary' placeholder='Add a comment' />
                    <div className='post-footer__emoji'></div>
                    <div className='post-footer__img'>
                        <label htmlFor='picture'></label>
                        <input className='post-footer__inputSecondary' type='file' placeholder='Add a comment' id='picture' name='picture' />
                    </div>
                </form>
            </div>
            <div className='post-footer__commentList'>
                <button>Most relevant</button>
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