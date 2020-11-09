import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';


export default class BurgerBuilder extends Component {


    render() {
        return (
            <Auxi>
                <Burger />
                <div>Build control area</div>
            </Auxi>
        )
    }
}
