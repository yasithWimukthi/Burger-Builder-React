import React from 'react';
import Logo from '../../assets/images/logo.png' ;
import classes from './Logo.css' ;

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={Logo} alt="Logo" />
        </div>
    )
}

export default Logo ;