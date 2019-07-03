import React from 'react';
import { MainPage, CartPage, MenuListItemPage } from '../pages';
import AppHeader from '../app-header';
import {connect} from 'react-redux';
import {addedToCart, deleteFromCart} from '../../actions';
import { Switch, Route, withRouter } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({total}) => {

    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={total} />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/cart' exact component={CartPage} />
                <Route path='/menu/:id' render={
                    ({ match }) => {
                        const { id } = match.params;
                        return <MenuListItemPage menuListItemId={id} />
                    }
                } />
            </Switch>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

const mapDispatchToProps = {
    addedToCart,
    deleteFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));