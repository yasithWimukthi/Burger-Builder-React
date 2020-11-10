import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey =>{
                return [...Array(props.ingredients[igKey])].map((_,i)=>{
                    return <BurgerIngredient key={igKey + 1} type={igKey}/>
                });
            }).reduce((arr,el)=>{
                return arr.concat(el);
            },[])
    
    /**
     *  Object.keys() method returns an array of a given object's own enumerable property names, 
     * iterated in the same order that a normal loop would
     */

     if(transformedIngredients.length === 0){
        /**
         * If user does not select ingredients then an error message wil be displayed
         */
        transformedIngredients = <p>Please add ingredients!!</p>
     }


    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default Burger
