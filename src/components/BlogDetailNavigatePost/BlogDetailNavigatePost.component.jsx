import React from "react";
import './BlogDetailNavigatePost.styled.scss';

const BlogDetailNavigatePost = (str) => {
    const tagNameData = [
        'Australian', 'Banana', 'Bread', 'Cling', 'Common', 'Fresh', 'Fruits', 'Kiwi',
        'Mango', 'Mushroom', 'Orange', 'Organic Food', 'Passion', 'Peaches', 'Red',
        'Strawberry', 'Tomato', 'Trend', 'Vegetables', 'Water Melon'
    ];

    const renderTagName = (str, type) => {

        return tagNameData.map((name, idx) => {
            return (
                <span key={idx}>
                    <span className="nav-post__tag-item">{name}</span>
                    {idx < tagNameData.length - 1 ? `, ` : ''}
                </span>
            )
        })
    }
    return (
        <div className="blog__nav-post__container">
            <div className="blog__nav-post__category-tag">
                <div className="blog__nav-post__category">
                    <p>
                        Categories: <span>Milk & Cream</span>, <span>Vegetables</span>
                    </p>
                </div>
                <div className="blog__nav-post__tag">
                    <div className="blog__nav-post__tag--left">
                        <p>
                            Tags: {renderTagName()}
                        </p>
                    </div>
                    <div className="blog__nav-post__tag--right">
                        <span>
                            <i className="fab fa-facebook-f"/>
                        </span>
                        <span>
                            <i className="fab fa-twitter"/>
                        </span>
                        <span>
                            <i className="fab fa-linkedin-in"/>
                        </span>
                        <span>
                            <i className="fab fa-tumblr"/>
                        </span>
                        <span>
                            <i className="fab fa-google-plus-g"/>
                        </span>
                        <span>
                            <i className="fab fa-pinterest"/>
                        </span>
                        <span>
                            <i className="fas fa-envelope"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="blog__nav-post__navigate">
                <div className="blog__nav-post__navigate--left">
                    <div className="nav-post__navigate--arrow">
                        <i className="fas fa-arrow-left"/>
                    </div>
                    <div className="nav-post__navigate--text">
                        <h3>PREVIOUS POST</h3>
                        <h2>Keeping Your Fruits and Veggies</h2>
                    </div>
                </div>
                <div className="blog__nav-post__navigate--right">
                    <div className="nav-post__navigate--text">
                        <h3>NEXT POST</h3>
                        <h2>Reverse heart disease without meds</h2>
                    </div>
                    <div className="nav-post__navigate--arrow">
                        <i className="fas fa-arrow-right"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailNavigatePost;
