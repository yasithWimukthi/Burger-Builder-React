import React from 'react';
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop' ;
import Auxi from '../../../hoc/Auxi' ;

const SideDrawer = (props) => {
    return (
        <Auxi>
            <Backdrop  show/>
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
