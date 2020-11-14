import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    updatePurchaseState = (ingredients)=>{

        const sumOfIngredients = Object.keys(ingredients)
            .map(ingredient =>{
                return ingredients[ingredient];
            })
            .reduce((sum,el)=>{
                return sum + el;
            },0);
        console.log(sumOfIngredients)
        this.setState({
            purchasable : sumOfIngredients > 0
        })
    };

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

        this.updatePurchaseState(UPDATE_INGREDIENTS)
    }

    removeIngredientHandler = type =>{
        // SET INGREDIENT COUNT
        const OLD_COUNT =  this.state.ingredients[type];

        if(OLD_COUNT <= 0){
            return;
        }
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

        this.updatePurchaseState(UPDATE_INGREDIENTS)
    }

    purchaseHandler = ()=>{
        this.setState({
            purchasing : true
        })
    };

    purchaseCancelHandler = ()=>{
        this.setState({
            purchasing : false
        })
    };

    purchaseContinueHandler = ()=>{
        alert("You Continue!!!");
    };

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0 ;
        }

        return (
            <Auxi>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Auxi>
        )
    }
}
