import React from 'react';
import './menu-list-item.scss';
import {withRouter} from 'react-router-dom';
import { menuLoaded, menuRequested, menuCatchedError, addedToCart } from '../../actions';
import { connect } from 'react-redux';

const MenuListItem = ({menuItem, onAddToCart, history}) => {
    

    const {title, price, url, category, id} = menuItem;
    
    const onItemSelected = (id) => {
        history.push(`/menu/${id}/`);
    }
 
    return (
        <li className="menu__item" id={id}>
            <div className="menu__title"
                onClick={() => onItemSelected(id)}>
                {title}
            </div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span className={category}>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
        </li>
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
    addedToCart
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuListItem));