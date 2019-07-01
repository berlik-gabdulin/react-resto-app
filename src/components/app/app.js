import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {Switch, Route} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {

    console.log(RestoService.getMenuItems());

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/menu/' exact component={MainPage}/>
                <Route path='/cart-page/' exact component={CartPage}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);