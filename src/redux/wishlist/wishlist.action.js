export const addWishList = item => {
    return ({
        type: 'add_wishlist',
        payload: item
    })
}
