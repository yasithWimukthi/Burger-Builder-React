import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';


export default class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            chesse: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <div>Build control area</div>
            </Auxi>
        )
    }
}
