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
const menuItemSelected = (currentItem) => {
    return {
        type: 'MENU_ITEM_SELECTED',
        payload: currentItem
    }
}

export {
    menuLoaded,
    menuRequested,
    menuCatchedError,
    menuItemSelected
};