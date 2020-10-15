import React from "react";
import './FeatureProducts.styled.scss';

import organicProduct_1 from './../../assets/products/fruit_1.jpg';
import organicProduct_2 from './../../assets/products/fruit_2.jpg';
import organicProduct_3 from './../../assets/products/fruit_3.jpg';
import organicProduct_4 from './../../assets/products/fruit_4.jpg';

import Product from "../Product/Product.component";

class FeatureProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryTab: [
                'ORGANIC', 'FRUITS', 'SEAFOOD', 'WINE & BEER',
                'BAKERY'
            ],
            products: [
                {
                    id: 1,
                    name: 'Zespri New Zealand Kiwifruit – Green',
                    description: '',
                    image: organicProduct_1,
                    price: 169.99,
                    category: 'ORGANIC'
                },
                {
                    id: 2,
                    name: 'White Seedless Grapes 500g',
                    description: '',
                    image: organicProduct_2,
                    price: 171.19,
                    category: 'ORGANIC'
                },
                {
                    id: 3,
                    name: 'Waitrose Candy Crunch Seedless Grapes400g',
                    description: '',
                    image: organicProduct_3,
                    price: 171.16,
                    category: 'SEAFOOD'
                },
                {
                    id: 4,
                    name: 'Tipco 100% Fruit Juice Tangerine Orange Juice',
                    description: '',
                    image: organicProduct_4,
                    price: 150.52,
                    category: "BAKERY"
                },
                {
                    id: 5,
                    name: 'Tipco 100% Fruit Juice Tangerine Orange Juice',
                    description: '',
                    image: organicProduct_4,
                    price: 150.52,
                    category: "FRUITS"
                },
                {
                    id: 6,
                    name: 'Waitrose Candy Crunch Seedless Grapes400g',
                    description: '',
                    image: organicProduct_3,
                    price: 171.16,
                    category: 'FRUITS'
                },
            ],
            currentTab: 'organic'
        }
    }

    categoryItemOnClick = (e) => {
        const categoryItem = e.target;
        const currentTabName = categoryItem.textContent.toLowerCase();

        this.setState(()=>{
            return {
                currentTab: currentTabName
            }
        })
    }

    categoryTabName = () => {
        const {categoryTab, currentTab} = this.state;

        return categoryTab.map((category, index) => {
            return (
                <div
                    key={index}
                    className={`
                        featured__category__item 
                        ${currentTab === category.toLowerCase()
                            && "featured__category__item--selected"}`
                    }
                    onClick={this.categoryItemOnClick}
                >
                    {category}
                </div>
            );
        })
    }

    renderProductList = () => {
        const {products, currentTab} = this.state;
        if(currentTab.length > 0){
            return  products.filter((p) => {
                return p.category.toLowerCase() === currentTab
            }).map((p, index)=>{
                return <Product key={index} product={p} />
            })
        }else {
            return products.map((p, index)=>{
                return <Product key={index} product={p} />
            })
        }
    }

    render() {

        return(
            <div className="featured__product">
                <div className="featured__title">
                    <h1>
                        <span className="highlight-text">FEATURED</span> PRODUCTS
                    </h1>
                </div>
                <div className="featured__category">
                    {this.categoryTabName()}
                </div>
                <div className="featured__product">
                    {this.renderProductList()}
                </div>
            </div>
        );
    }
}

export default FeatureProducts;
