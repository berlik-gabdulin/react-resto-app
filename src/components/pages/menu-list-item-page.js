import React from 'react';
import {withRouter} from 'react-router-dom';

const MenuListItemPage = ({menuItem}) => {

    const {title, price, url, category} = menuItem;
 
    return (
        <div className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span className={category}>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </div>
    )
}

export default withRouter(MenuListItemPage);