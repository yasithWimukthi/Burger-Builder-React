import React from 'react';
import classes from './Modal.css';
imp

function Modal(props) {

    const styles = {
        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
        opacity : props.show ? '1' : '0'
    }
    
    return (
        <div className={classes.Modal} style={styles}>
            {props.children}
        </div>
    )
}


export default Modal;
