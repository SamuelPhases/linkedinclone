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
                    <li> <h3>#</h3> sales</li>
                    <li> <h3>#</h3> design</li>
                    <li> <h3>#</h3> development</li>
                </ul>
            </li>
            <li>
                <div>
                    <p>groups</p>
                    <div></div>
                </div>
                <ul>
                    <li> <h3>#</h3> sales</li>
                    <li> <h3>#</h3> design</li>
                    <li> <h3>#</h3> development</li>
                </ul>
            </li>
            <li>
                <div>
                    <p>events</p>
                    <div></div>
                </div>
                <ul>
                    <li> <h3>#</h3> sales</li>
                    <li> <h3>#</h3> design</li>
                    <li> <h3>#</h3> development</li>
                </ul>
            </li>
            <li>
                <div>
                    <p>followed hashtags</p>
                    <div></div>
                </div>
                <ul>
                    <li> <h3>#</h3> sales</li>
                    <li> <h3>#</h3> design</li>
                    <li> <h3>#</h3> development</li>
                </ul>
            </li>
        </ul>
        <h3>Discover more</h3>
    </div>
  )
}

export default RecentWidget