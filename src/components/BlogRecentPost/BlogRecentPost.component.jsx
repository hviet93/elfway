import React from "react";
import './BlogRecentPost.styled.scss';

import recentPostImg_1 from './../../assets/blogs/blog-1.jpg';
import recentPostImg_2 from './../../assets/blogs/blog-2.jpg';
import recentPostImg_3 from './../../assets/blogs/blog-3.jpg';
import recentPostImg_4 from './../../assets/blogs/blog-4.jpg';
import {Link} from "react-router-dom";
const BlogRecentPost = () => {
    const recentPostData = [
        {
            image: recentPostImg_1,
            title: 'Reverse heart disease without meds',
            date: 'June 19, 2020'
        },
        {
            image: recentPostImg_2,
            title: 'Cleansing the Body of Parasites',
            date: 'June 19, 2020'
        },
        {
            image: recentPostImg_3,
            title: 'Keeping Your Fruits and Veggies',
            date: 'June 19, 2020'
        },
        {
            image: recentPostImg_4,
            title: 'Keeping Your Fruits and Veggies',
            date: 'June 19, 2020'
        }
    ]

    const renderRecentPost = () => {
        return recentPostData.map((post, idx) => {
            return (
                <div key={idx} className="post__content">
                    <div className="post__content--img">
                        <img src={post.image} alt={`Post ${idx + 1}`} />
                    </div>
                    <div className="post__content--text">
                        <h4>
                            <Link to='#'>
                                {post.title}
                            </Link>
                        </h4>
                        <p>
                            <i className="far fa-calendar-alt highlight-text"/>&nbsp;{post.date}
                        </p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="blog__recent-post__container">
            <div className="blog__recent-post__title">
                <h2>RECENT POSTS</h2>
            </div>
            <div className="blog__recent-post__content">
                {renderRecentPost()}
            </div>
        </div>
    )
}

export default BlogRecentPost;
