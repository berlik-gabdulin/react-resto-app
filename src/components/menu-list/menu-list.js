import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {withRouter} from 'react-router-dom';
import { menuLoaded, menuRequested, menuCatchedError, addedToCart } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const { RestoService, menuLoaded, menuRequested, menuCatchedError } = this.props;

        menuRequested();

        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(() => {
                menuCatchedError();
            });
    }

    render() {

        const { menuItems, addedToCart, loading, error } = this.props;

        const itemsList = menuItems.map(menuItem => {
            return <MenuListItem
                    key={menuItem.id}
                    menuItem={menuItem}
                    onAddToCart={() => addedToCart(menuItem.id)}/>
        })
        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <ul className="menu__list">{itemsList}</ul> : null;

        return (
            <>
                {errorMessage}
                {spinner}
                {content}
            </>
        )

    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuCatchedError,
    addedToCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuList)));