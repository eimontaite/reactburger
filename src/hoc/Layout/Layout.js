import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    //in the arrow function, the "this" keyword refers to the entire Layout class
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    // all class components have to render a method and return JSX
    render() {
        return (
            <Aux>
                <Toolbar />
                {/* <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/> */}
                <div>Backdrop</div>
                <main className="Content">
                {/* props can be accessed with "this" in all class components */}
                    {this.props.children} 
                </main>
            </Aux>
        )
    }

}
// class components: capitalize
export default Layout;