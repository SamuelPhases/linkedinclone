import React from 'react';
import './NavbarItem.css'



function NavbarItem({name,Icon}) {
  return (
    <div className="navbarItem">
        <Icon/>
        <h4>{name}</h4>
    </div>
  )
}

export default NavbarItem;
