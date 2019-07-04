import React from 'react';
import {connect} from 'react-redux';
import {deleteFromCart, orderConfirmed} from '../../actions';
import WithRestoService from '../hoc';

import './cart-table.scss';

const CartTable = ({items, deleteFromCart, orderConfirmed, total, RestoService}) => {
    
    const confirmBtn = (total > 0) ? <button onClick={() => onConfirm()} className="menu__btn menu__btn--confirm">Confirm</button> : null;

    const onConfirm = () => {
        RestoService.postOrder(items);
        orderConfirmed()
    }
 
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count, total} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ x {count} = {total} $</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            {confirmBtn}
        </>
    );
};

const mapStateToProps = ({items, total}) => {
    return {
        items,
        total
    }
}
const mapDispatchToProps = {
    deleteFromCart,
    orderConfirmed
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));