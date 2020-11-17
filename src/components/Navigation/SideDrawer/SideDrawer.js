import React from 'react';
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';


const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.logo}>
                <Logo />
            </div>
            
            <nav className={classes.desktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer;
