import React from 'react';
import WithRestoService from '../hoc';
import MenuListItem from '../menu-list-item';
import {withRouter} from 'react-router-dom';
import { menuLoaded, menuRequested, menuCatchedError, menuItemSelected } from '../../actions';
import { connect } from 'react-redux';

const MenuListItemPage = ({RestoService, menuListItemId, menuLoaded, menuItems}) => {

    // console.log(menuListItemId);

    RestoService.getMenuItems()
            .then(res => menuLoaded(res));
    
    const {title, price, url, category, id} = menuItems[menuListItemId + 1];
 
    return (
        <>
            <li className="menu__item" id={id}>
            <div
                className="menu__title">
                {title}
            </div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span className={category}>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
        </>
    )
}
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
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuListItemPage)));