import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import MenuListItem from '../menu-list-item';
import {withRouter} from 'react-router-dom';

class MenuListItemPage extends Component {

    componentDidMount() {
        const { RestoService, menuLoaded, menuRequested, menuCatchedError, menuItemSelected, error } = this.props;
        console.log('Props', this.props);

        RestoService.getMenuItems()
            .then(res => {
                res.map(res => {
                    console.log(res);
                })
            });
    }

    

    render() {
        return (
            <>
                Hello
                <MenuListItem/>
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

export default WithRestoService()(connect(mapStateToProps)(withRouter(MenuListItemPage)));