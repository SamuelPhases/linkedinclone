import React from 'react'
import './HomeLayout.css'


function HomeLayout({children}) {
  return (
    <div className='home-layout__flex'>
        {children}
    </div>
  )
}

export default HomeLayout