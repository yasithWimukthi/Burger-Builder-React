import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

export default class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4
    }

    addIngredientHandler = type =>{
        // SET INGREDIENT COUNT
        const OLD_COUNT =  this.state.ingredients[type];
        const UPDATE_COUNT = OLD_COUNT + 1;
        const UPDATE_INGREDIENTS = {
            ...this.state.ingredients
        }
        UPDATE_INGREDIENTS[type] = UPDATE_COUNT;

        // SET TOTAL PRICE
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients : UPDATE_INGREDIENTS,
            totalPrice : newPrice
        });
    }

    removeIngredientHandler = type =>{
        // SET INGREDIENT COUNT
        const OLD_COUNT =  this.state.ingredients[type];
        const UPDATE_COUNT = OLD_COUNT - 1;
        const UPDATE_INGREDIENTS = {
            ...this.state.ingredients
        }
        UPDATE_INGREDIENTS[type] = UPDATE_COUNT;

        // SET TOTAL PRICE
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients : UPDATE_INGREDIENTS,
            totalPrice : newPrice
        });
    }

    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                />
            </Auxi>
        )
    }
}
