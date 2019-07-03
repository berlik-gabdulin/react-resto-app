const initialState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    console.log('Prev state', state);
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED': 
            return {
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_CATCHED_ERROR':
            return {
                menu: state.menu,
                loading: action.loading,
                error: action.error
            };
        case 'MENU_ITEM_SELECTED':
            console.log('action.id', action.id);
            return {
                menu: action.payload,
                loading: state.loading,
                error: state.error
            };
        default:
            return state;
    }
}

export default reducer;