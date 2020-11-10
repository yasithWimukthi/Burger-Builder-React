import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
            .map(igKey =>{
                return [...Array(props.ingredients[igKey])].map((_,i)=>{
                    return <BurgerIngredient key={igKey + 1} type={igKey}/>
                });
            });
    /**
     *  Object.keys() method returns an array of a given object's own enumerable property names, 
     * iterated in the same order that a normal loop would
     */
    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default Burger
