import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls =[
    {label : 'Salad', type:'salad'},
    {label : 'Bacon', type:'bacon'},
    {label : 'Cheese', type:'chesse'},
    {label : 'Meat', type:'meat'}
];

function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            {controls.map(control =>{
                return <BuildControl key={control.label} label={control.label}/>
            })}
        </div>
    )
}

export default BuildControls;