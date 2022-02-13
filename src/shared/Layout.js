import React from 'react';
import './Layout.css'
import Navbar from './Navbar';



function Layout({children}) {
  return (
      <div className="layout">
        <div className="layout-nav">
            <Navbar/>
        </div>
        <div className="layout-container">
            <div className="layout-content">
                {children}
            </div>
        </div>
      </div>
  )
}

export default Layout;
