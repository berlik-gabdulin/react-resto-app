import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuCatchedError, menuItemSelected } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const { RestoService, menuLoaded, menuRequested, menuCatchedError, error } = this.props;

        console.log('Mount error - ', error);

        menuRequested();

        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(() => {
                menuCatchedError();
            });
    }

    render() {

        const { menuItems, loading, error } = this.props;

        const itemsList = menuItems.map(menuItem => {
            return <MenuListItem key={menuItem.id} menuItem={menuItem} />
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
    menuItemSelected
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));