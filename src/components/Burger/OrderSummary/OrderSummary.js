import React from 'react';
import Auxi from '../../../hoc/Auxi';

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
            <p>Continue to checkout ?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxi>
    )
}

const styles = {
    TextTransform : 'capitatize'
}

export default OrderSummary;
