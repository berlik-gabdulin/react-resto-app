const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
const menuCatchedError = () => {
    return {
        type: 'MENU_CATCHED_ERROR',
        loading: false,
        error: true
    }
}
const menuItemSelected = () => {
    return {
        type: 'MENU_ITEM_CLICKED',
    }
}

export {
    menuLoaded,
    menuRequested,
    menuCatchedError,
    menuItemSelected
};