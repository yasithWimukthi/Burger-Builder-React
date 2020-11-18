import React from 'react';
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Auxi from '../../../hoc/Auxi' ;

const SideDrawer = (props) => {
    return (
        <Auxi>
            <div className={classes.SideDrawer}>
            <div className={classes.logo}>
                <Logo />
            </div>
            
            <nav className={classes.desktopOnly}>
                <NavigationItems />
            </nav>
            </div>
        </Auxi>

    )
}

export default SideDrawer;
