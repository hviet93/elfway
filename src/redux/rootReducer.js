import {combineReducers} from "redux";

import cartReducers from "./cart/cart.reducer";
import wishlistReducers from "./wishlist/wishlist.reducer";

export default combineReducers({
    cart: cartReducers,
    wishList: wishlistReducers
});
