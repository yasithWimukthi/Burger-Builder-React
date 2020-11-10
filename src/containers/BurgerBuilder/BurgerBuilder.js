import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


export default class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxi>
        )
    }
}
