import React from 'react';
import classes from './NavigationItems.css' ;
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.navigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem>Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems ;