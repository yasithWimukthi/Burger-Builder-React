import React from 'react';
import classes from './Modal.css';
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop' ;

function Modal(props) {

    const styles = {
        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
        opacity : props.show ? '1' : '0'
    }
    
    return (
        <Auxi>
            <Backdrop show={props.show}/>
            <div className={classes.Modal} style={styles}>
                {props.children}
            </div>
        </Auxi>
    )
}


export default Modal;
