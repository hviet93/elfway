import React from "react";
import './ProductsOnSale.styled.scss';
import productOnSaleImg from './../../assets/products/fruit_1.jpg';
import {Link} from "react-router-dom";

const ProductsOnSale = () => {
    return (
        <div className="products__on-sale__container">
            <div className="products__on-sale__header">
                <h2>PRODUCTS ON SALE</h2>
            </div>
            <div className="products__on-sale__body">
                <div className="products__on-sale__img">
                    <img src={productOnSaleImg} alt="Product On Sale"/>
                </div>
                <div className="products__on-sale__info">
                    <div className="products__on-sale__info--title">
                        <Link to="#">
                            Zespri New Zealand Kiwifruit - Green
                        </Link>
                    </div>
                    <div className="products__on-sale__info--price">
                        <span className="highlight-text">$169.19</span>
                        <span className="product__original-price">$178.94</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsOnSale;
