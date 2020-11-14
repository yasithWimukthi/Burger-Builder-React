import React from 'react';
import classes from './Button.css';

export const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={[classes.Button , classes[props.btnType]].join(' ')}>{props.children}
        </button>
    )
}
