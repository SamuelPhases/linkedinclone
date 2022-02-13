import React from 'react';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import NavbarItem from './NavbarItem';
import './Navbar.css'


function Navbar() {
  return (
        <nav className="navbar">
            <div className='navbar-container'>
                <div className='navbar-logoSearch'>
                    <div className='navbar-logoSearch__input'>
                        <label  htmlFor='search'>
                            <SearchRoundedIcon/>
                        </label>
                        <input placeholder="Search" id='search' name='search' />
                    </div>
                </div>
                <div className='navbar-links'>
                    <NavbarItem name="home" Icon={HomeRoundedIcon} />
                    <NavbarItem name="my network" Icon={PeopleAltRoundedIcon} />
                    <NavbarItem name="jobs" Icon={BusinessCenterRoundedIcon} />
                    <NavbarItem name="messaging" Icon={ModeCommentRoundedIcon} />
                    <NavbarItem name="notifications" Icon={NotificationsRoundedIcon} />
                    <div className='navbar-links__item'>
                        <div className='navbar-links__item-dp'></div>
                        <div className='navbar-links__item-btn'>
                            <h5>me</h5>
                            <ArrowDropDownRoundedIcon/>
                        </div>
                    </div>
                    <NavbarItem name="work" Icon={StorageRoundedIcon} />
                    <div className='navbar-links__item'>
                        <h5>get hired faster</h5>
                        <h5>try premium free</h5>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
