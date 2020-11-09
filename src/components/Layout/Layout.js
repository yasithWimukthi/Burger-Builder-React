import React from 'react';
import classes from './Layout.css';
import Auxi from '../../hoc/Auxi';

export default function Layout(props) {
    return (
        <Auxi>
        <div>
            toolbar
        </div>

        <main className={classes.content}>
            {props.children}
        </main>
        </Auxi>

    )
}
