import React from "react";
import {connect} from 'react-redux';
import './Checkout.styled.scss';


class CheckoutComponent extends React.Component {
    renderProductCart = () => {
        return this.props.cart.length > 0
            ? this.props.cart.map((c, idx) => {
                return (
                    <tr key={idx} className="checkout__product-detail">
                        <td className="product__detail-name">{c.product.name}</td>
                        <td className="product__detail-price">{c.product.price}</td>
                        <td className="product__detail-quantity">${c.quantity}</td>
                        <td className="product__detail-unit-total-price">${c.product.price * c.quantity}</td>
                    </tr>
                    )
                })
            : <tr className="checkout__product-detail"/>;
    }

    render() {
        return (
            <div className="checkout__container">
                <table className="checkout__table">
                    <thead className="checkout__header">
                    <tr>
                        <th>Products</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Unit total price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderProductCart()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return({
        cart: state.cart
    })
}

export default connect(mapStateToProp)(CheckoutComponent);
