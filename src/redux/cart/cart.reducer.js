const initState = [];

const cartReducers = (state = initState, action) => {
    switch (action.type) {
        case 'add_cart':
            //window.localStorage.setItem('cart', JSON.stringify(action.payload));
            //return [...state, action.payload];
            return [...action.payload];
        default:
            return state;
    }
}

export default cartReducers;
