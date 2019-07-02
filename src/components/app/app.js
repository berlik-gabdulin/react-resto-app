import React from 'react';
import { MainPage, CartPage, MenuListItemPage } from '../pages';
import AppHeader from '../app-header';
import { Switch, Route } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {

    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={50} />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/cart' exact component={CartPage} />
                <Route path='/:id' render={
                    ({ match }) => {
                        const { id } = match.params;
                        return <MenuListItemPage menuListItemId={id} />
                    }
                } />
            </Switch>
        </div>
    )
}

export default App;