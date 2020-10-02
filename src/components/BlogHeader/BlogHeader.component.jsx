import React from "react";
import './BlogHeader.styled.scss';
import {Link} from 'react-router-dom';

const BlogHeader = () => {
    const currentUrl = window.location.pathname;

    const activatedLinkTextColor = () => {
        switch (currentUrl) {
            case '/blogs':
                return {
                    color: 'rgb(139, 167, 59)'
                }
            default:
                return {};
        }
    }

    return (
        <div className="blog__header__container">
            <span className="blog__header--item">
                <Link to="/">
                    <i className="fas fa-home"/>
                </Link>
            </span>
            <span className="blog__header--item">
                <Link to="#"  style={activatedLinkTextColor()}>
                    Blog
                </Link>
            </span>
        </div>
    )
}

export default BlogHeader;
