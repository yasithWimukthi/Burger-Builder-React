import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className={classes.toolbar}>
          <div>menu</div>

          <div className={classes.logo}>
            <Logo /> 
          </div>
          
          <nav>
              <NavigationItems />
          </nav>
        </header>
    )
}


export default Toolbar;