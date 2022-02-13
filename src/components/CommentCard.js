import React from 'react'
import './CommentCard.css'


function CommentCard() {
  return (
    <div className='commentCard'>
        <div className='commentCard-dp'>
            <div className='=commentCard-dp__img'></div>
            <div className='=commentCard-dp__status'></div>
        </div>
        <div className='commentCard-body-container'>
            <div className='commentCard-body'>
                <div className='commentCard-body__header'>
                    <div className='commentCard-body__header-info'>
                        <h5>Linus Lincoln</h5>
                        <h5>1st</h5>
                    </div>
                    <div className='commentCard-body__header-time'>
                        <h6>1s</h6>
                    </div>
                </div>
                <h6>Creative Programmer | Creative Designer | Creative Programmer | Creative Designer | Creative Programmer | Creative Designer</h6>
                <p>A Creative Programmer and Designer  wow A Creative Programmer and Designer  wow A Creative Programmer and Designer  wow</p>
            </div>
            <div  className='commentCard-body__btns'>
                <button>like</button>
                <button>reply</button>
            </div>
        </div>
    </div>
  )
}

export default CommentCard