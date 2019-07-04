import React, {Component} from 'react';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// import MenuListItem from '../menu-list-item';
import { menuLoaded, menuRequested, menuCatchedError, addedToCart } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class MenuListItemPage extends Component {

    componentDidMount() {
        const {RestoService, menuListItemId, menuLoaded, menuCatchedError, menuRequested} = this.props;

        menuRequested();

        RestoService.getMenuItems()
            .then(res => {
                res = res.filter((item) => {
                    return item.id === Number(menuListItemId)
                });
                menuLoaded(res);
            })
            .catch(() => {
                menuCatchedError();
            });
    }
    componentWillUnmount() {
        menuRequested();
    }
    
    render() {
        const { menuItems, loading,  error, addedToCart } = this.props;

        const currentItem = menuItems.map((menuItem) => {return menuItem});
        
        const View = () => {
            const {title, price, url, category, id} = currentItem[0];
            return <>
                <div className="menu__item" >
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span className={category}>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button onClick={() => addedToCart(id)} className="menu__btn">Add to cart</button>
                </div>
                </>
        }

        // console.log('view', view);


        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <View /> : null;

        return (
            <>
                {errorMessage}
                {spinner}
                {content}
            </>
        )
    }
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
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuListItemPage)));