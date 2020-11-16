import React from 'react';
import classes from './Layout.css';
import Auxi from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';

export default function Layout(props) {
    return (
        <Auxi>
        <Toolbar />

        <main className={classes.content}>
            {props.children}
        </main>
        </Auxi>

    )
}
