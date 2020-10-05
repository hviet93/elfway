import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import './Product.styled.scss';
import wishListIcon from './../../assets/icon/wishlist.png';
import compareIcon from './../../assets/icon/compare.png';
import {addCart} from '../../redux/cart/cart.action';
import {addWishList} from '../../redux/wishlist/wishlist.action';

const Product = (props) => {

    const addProductCart = (product) => {
        //let {cart} = props;
        let cart = window.localStorage.getItem('cart')
            ?  JSON.parse(window.localStorage.getItem('cart'))
            : props.cart;
        let productNotExist = true;
        cart = cart.map(productCart => {
            if(productCart.product.id === product.id) {
                productNotExist = false;
                productCart.quantity += 1;
            }
            return productCart;
        });

        if(productNotExist) {
            cart.push({
                product: product,
                quantity: 1
            });
        }

        props.dispatch(addCart(cart));
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addProductWishList = (product) => {
        props.dispatch(addWishList(product));
    }

    return (
        <div className="product">
            <div className="product__image">
                <button>+</button>
                <img src={props.product.image} alt="single product"/>
            </div>
            <div className="product__content">
                <div className="product__category">
                    <Link to="#">{props.product.category}</Link>
                </div>
                <div className="product__title">
                    <Link to={`/product/${props.product.id}`}>{props.product.name}</Link>
                </div>
                <div className="product__description">
                    <p>
                        {props.product.description}
                    </p>
                </div>
                <div className="product__price">
                    <span>${(Math.round(props.product.price * 100) / 100).toFixed(2)}</span>
                </div>
                <div className="product__action">
                    <div className="action__add">
                        <button
                            onClick={() => addProductCart(props.product)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className="action__wish">
                        <button
                            onClick={() => addProductWishList(props.product)}
                        >
                            <img src={wishListIcon} alt="wishlist"/>
                        </button>
                        <button>
                            <img src={compareIcon} alt="compare"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProp = state => {
    //window.localStorage.setItem('cart', JSON.stringify(state.cart));

    return {
        cart: state.cart,
        wishList: state.wishList
    }
}

export default connect(mapStateToProp)(Product);
