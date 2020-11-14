import React from 'react';
import Auxi from '../../../hoc/Auxi';
import {Button} from '../../UI/Button/Button' ;

function OrderSummary(props) {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredient =>{
            return( 
            <li key={ingredient}>
                <span style={styles}> {ingredient} : {props.ingredients[ingredient]} </span>
            </li> )
        })

    return (
        <Auxi>
            <h3>Your Order </h3>
            <p>A delicious burger with the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
    <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxi>
    )
}

const styles = {
    TextTransform : 'capitatize'
}

export default OrderSummary;
