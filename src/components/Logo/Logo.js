import React from 'react';
import BurgerLogo from '../../assets/images/logo.png' ;
import classes from './Logo.css' ;

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={BurgerLogo} alt="Logo" />
        </div>
    )
}

export default Logo ;