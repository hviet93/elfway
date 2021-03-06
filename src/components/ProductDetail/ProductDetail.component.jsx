import React from "react";
import './ProductDetail.styled.scss';
import {connect} from 'react-redux';
import {addCart} from "../../redux/cart/cart.action";

import productImg_1 from './../../assets/products/seafood-1.jpg';
import productImg_2 from './../../assets/products/seafood-2.jpg';
import productImg_3 from './../../assets/products/seafood-3.jpg';
import {Link} from "react-router-dom";
//import productImg_4 from './../../assets/products/seafood-4.jpg';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            images: [
                productImg_1, productImg_2,
                productImg_3
            ],
            productCart: props.productCart,
            itemQuantity: 0
        }
    }


    componentDidMount() {
        window.scrollTo(0,0);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.product.id !== prevState.product.id) {
            return {
                product: nextProps.product
            }
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.product.id !== this.state.product.id) {
            this.setState(() => {
                return {
                    product: prevProps.product
                }
            })
        }
    }

    addProductCart = (product) => {
        let {cart} = this.props;
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

        this.props.dispatch(addCart(cart));
    }

    renderImageSlider = () => {
        const {images} = this.state;

        return images.map((img, idx) => {
           return (
               <div key={idx} className="img-slider--item">
                   <img src={img} alt={`Product Item ${idx + 1}`}/>
               </div>
           )
        });
    }

    renderProductDetailQuantity = () => {
        const {productCart} = this.state;
        const {cart} = this.props;

        return productCart.map((p, idx) => {
            const itemCart = cart.length > 0
                ? cart.filter(c => c.product.id === p.id) : [];
            const itemQuantity = itemCart.length > 0 ? itemCart[0].quantity : 0;

            return (
                <div key={idx} className="content__quantity--item">
                    <div className="quantity__item__img">
                        <img src={p.image} alt={`Quantity ${idx + 1}`}/>
                    </div>
                    <div className="quantity__item__name">
                        <Link to="#">{p.name}</Link>
                    </div>
                    <div className="quantity__item__price">
                        <span>${p.price}</span>
                    </div>
                    <div className="quantity__item__action">
                        <span
                            className="item__action__minus"
                            onClick={(e) => this.actionItemQuantity(e, p)}
                        >
                            <i
                                className="fas fa-minus item__action__minus"
                            />
                        </span>
                        <span className="item__action__number">
                            {itemQuantity}
                        </span>
                        <span
                            className="item__action__plus"
                            onClick={(e) => this.actionItemQuantity(e, p)}
                        >
                            <i
                                className="fas fa-plus item__action__plus"
                            />
                        </span>
                    </div>
                </div>
            )
        })
    }

    actionItemQuantity = (e, product) => {
        const iconClass = e.target.className;
        let {cart} = this.props;
        let productItemArr = cart.filter(c => c.product.id === product.id);

        if(iconClass.includes("item__action__plus")) {
            if(productItemArr.length > 0) {
                cart = cart.map(c => {
                    if(c.product.id === product.id) {
                        c.quantity += 1;
                    }
                    return c;
                })
            }
            else {
                cart.push({
                    product: product,
                    quantity: 1
                })
            }
        }
        else if(iconClass.includes("item__action__minus")) {
            if(productItemArr.length > 0) {
                if(productItemArr[0].quantity > 0) {
                    cart = cart.map(c => {
                        if(c.product.id === productItemArr[0].product.id) {
                            c.quantity -= 1;
                        }
                        return c;
                    })
                }
                else {
                    cart = cart.filter(c => c !== productItemArr[0].product.id);
                }
            }
        }

        this.props.dispatch(addCart(cart));
    }

    render() {
        const {product} = this.state;
        return (
            <div className="product-detail__container">
                <div className="product-detail__image">
                    <div className="product-detail__image--img">
                        <img src={product.image} alt="Product Detail"/>
                    </div>
                    <div className="product-detail__image--img-slider">
                        {this.renderImageSlider()}
                    </div>
                </div>
                <div className="product-detail__content">
                    <div className="product-detail__content--detail">
                        <div className="product-detail__content__title">
                            <h2>{product.name}</h2>
                        </div>
                        <div className="product-detail__content__rating" style={{display: 'none'}}/>
                        <div className="product-detail__content__price">
                            <span>${product.price}</span>
                        </div>
                        <div className="product-detail__content__description">
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>
                    <div className="product-detail__content--quantity">
                        <div className="content--quantity--list-item">
                            {this.renderProductDetailQuantity()}
                        </div>
                        <div className="content--quantity--action">
                            <div className="content--quantity__add-cart">
                                <button onClick={() => this.addProductCart(product)}>
                                    <i className="fas fa-shopping-bag"/>
                                    ADD TO CART
                                </button>
                            </div>
                            <div className="content--quantity__action-btn">
                                <span>
                                    <i className="fas fa-retweet"/>
                                </span>
                                <span>
                                    <i className="far fa-heart"/>
                                </span>
                            </div>
                        </div>
                        <div className="content--quantity--tag">
                            <div className="quantity__tag__category">
                                <p>
                                    Categories: <span>{product.category}</span>
                                </p>
                            </div>
                            <div className="quantity__tag">
                                <p>
                                    Tags: <span>Clothing</span>, <span>Glasses</span>
                                </p>
                            </div>
                        </div>
                        <div className="content--quantity--social">
                            <span className="social__facebook">
                                <i className="fab fa-facebook-f"/>
                            </span>
                            <span className="social__twitter">
                                <i className="fab fa-twitter"/>
                            </span>
                            <span className="social__linkedin">
                                <i className="fab fa-linkedin-in"/>
                            </span>
                            <span className="social__tumblr">
                                <i className="fab fa-tumblr"/>
                            </span>
                            <span className="social__google">
                                <i className="fab fa-google-plus-g"/>
                            </span>
                            <span className="social__pinterest">
                                <i className="fab fa-pinterest"/>
                            </span>
                            <span className="social__letter">
                                <i className="fas fa-envelope"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProp)(ProductDetail);
