import React from "react";
import {Link} from "react-router-dom";
import './BlogCategory.styled.scss';

const BlogCategory = () => {
    const listCategory = [
        'Breakfast & Cereal', 'Dried Fruits', 'Fast Food',
        'Fresh Meat', 'Fruits Juice', 'Milk & Cream',
        'Uncategorized', 'Vegetables'
    ]

    const renderCategoryList = () => {
        return listCategory.map((c, idx) => {
            return (
                <li key={idx} className='category--item'>
                    <Link to="#">{c}</Link>
                </li>
            )
        })
    }
    return (
        <div className="blog__category__container">
            <div className="blog__category__search">
                <input
                    type='text'
                    placeholder="Search..."
                    className="category__search--input"/>
                <button className="category__search--btn">
                    <i className="fas fa-search"/>
                </button>
            </div>
            <div className="blog__category__list">
                <div className="category__list__title">
                    <h2>BLOG CATEGORIES</h2>
                </div>
                <div className="category__list__content">
                    <ul className="category__list">
                        {renderCategoryList()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogCategory;
