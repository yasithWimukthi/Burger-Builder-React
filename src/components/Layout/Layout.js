import React,{Component} from 'react';
import classes from './Layout.css';
import Auxi from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer : true
    }

    sideDrawerCloseHandler =  ()=>{
        this.setState = {
            showSideDrawer : false
        }
    }

    render(){
        return (
            <Auxi>
                <Toolbar />

                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler} />
                    
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}

export default Layout;