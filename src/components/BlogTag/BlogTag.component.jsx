import React from "react";
import './BlogTag.styled.scss';

class BlogTag extends React.Component {
    dataTag = [
        'Australian', 'Banana', 'Bread','Cling','Common','Fresh',
        'Fruits','Kiwi','Mango','Mushroom','Orange','Organic','Food',
        'Passion','Peaches','Red','Strawberry','Tomato','Trend',
        'Vegetables','Water','Melon'
    ];

    renderTag = () => {
        return this.dataTag.map((tag, idx) => {
            return (
                <span key={idx} className="post__tag--item">
                    {tag}
                </span>
            )
        })
    }

    render() {
        return (
            <div className="blog__tag__container">
                <div className="blog__tag__title">
                    <h2>TAGS</h2>
                </div>
                <div className="blog__tag__content">
                    {this.renderTag()}
                </div>
            </div>
        );
    }
}

export default BlogTag;
