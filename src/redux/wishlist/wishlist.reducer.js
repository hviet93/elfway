const initState = [];

const wishlistReducers = (state = initState, action) => {
    switch (action.type) {
        case 'add_wishlist':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default wishlistReducers;
