import React from 'react'
import './RecentWidget.css'




function RecentWidget() {
  return (
    <div className='recentWidget'>
        <ul>
            <li>
                <div>
                    <p>Recent</p>
                    <div></div>
                </div>
                <ul>
                    <li>sales</li>
                    <li>design</li>
                    <li>development</li>
                </ul>
            </li>
            <li>
                <div>
                    <p>groups</p>
                    <div></div>
                </div>
                <ul>
                    <li>sales</li>
                    <li>design</li>
                    <li>development</li>
                </ul>
            </li>
            <li>
                <div>
                    <p>events</p>
                    <div></div>
                </div>
                <ul>
                    <li>sales</li>
                    <li>design</li>
                    <li>development</li>
                </ul>
            </li>
            <li>
                <div>
                    <p>followed hashtags</p>
                    <div></div>
                </div>
                <ul>
                    <li>sales</li>
                    <li>design</li>
                    <li>development</li>
                </ul>
            </li>
        </ul>
        <h3>Discover more</h3>
    </div>
  )
}

export default RecentWidget