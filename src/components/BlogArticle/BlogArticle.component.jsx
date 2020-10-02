import React from "react";
import './BlogArticle.styled.scss';

import blogImg_1 from './../../assets/blogs/blog-1.jpg';
import blogImg_2 from './../../assets/blogs/blog-2.jpg';
import blogImg_3 from './../../assets/blogs/blog-3.jpg';
import blogImg_4 from './../../assets/blogs/blog-4.jpg';
import blogImg_5 from './../../assets/blogs/blog-5.jpg';
import blogImg_6 from './../../assets/blogs/blog-6.jpg';
import blogImg_7 from './../../assets/blogs/blog-7.jpg';
import blogImg_8 from './../../assets/blogs/blog-8.jpg';
import blogImg_9 from './../../assets/blogs/blog-9.jpg';
import blogImg_10 from './../../assets/blogs/blog-10.jpg';
import {Link} from "react-router-dom";
/*import blogImg_11 from './../../assets/blogs/blog-11.jpg';
import blogImg_12 from './../../assets/blogs/blog-12.jpg';
import blogImg_13 from './../../assets/blogs/blog-13.jpg';*/

class BlogArticle extends React.Component {
    articleData = [
        {
            id: 1,
            image: blogImg_1,
            title: 'Reverse heart disease without meds',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 2,
            image: blogImg_2,
            title: 'Cleansing the Body of Parasites',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 3,
            image: blogImg_3,
            title: 'Keeping Your Fruits and Veggies',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 4,
            image: blogImg_4,
            title: 'Tips for Washing Fresh Fruits – Standard',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 5,
            image: blogImg_5,
            title: 'Broad bean and goats’ cheese',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 6,
            image: blogImg_6,
            title: 'Seven herbs that lower blood pressure',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 7,
            image: blogImg_7,
            title: 'Cleansing the Body of Parasites',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 8,
            image: blogImg_8,
            title: 'Reverse heart disease without meds',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 9,
            image: blogImg_9,
            title: 'Tips for Washing Fresh Fruits – Standard',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        },
        {
            id: 10,
            image: blogImg_10,
            title: 'Keeping Your Fruits and Veggies',
            contentArticle: 'Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend. Nunc pretium velit sed augue luctus accumsan. Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac',
            date: 'June 19, 2020',
            comment: [
                {
                    name: 'Tom',
                    contentComment: 'Comment 1'
                },
                {
                    name: 'Mary',
                    contentComment: 'Comment 2'
                },
                {
                    name: 'Peter',
                    contentComment: 'Comment 3'
                }
            ]
        }
    ]

    renderBlogArticle = () => {
        return this.articleData.map((article, idx) => {
            return(
                <div key={idx} className="blog__article">
                    <div className="blog__article__img">
                        <img src={article.image} alt={`Article ${idx + 1}`}/>
                    </div>
                    <div className="blog__article__text">
                        <h1 className="article__text--title">
                            <Link to={`blogs/${article.id}`}>
                                {article.title}
                            </Link>
                        </h1>
                        <p className="article__text--date-comment">
                            <span>
                                <i className="far fa-calendar-alt highlight-text"/>&nbsp;{article.date}
                            </span>
                            <span>
                                <i className="fas fa-comments highlight-text"/>&nbsp;{article.comment.length} Comments
                            </span>
                        </p>
                        <p className="article__text--paragraph">
                            {article.contentArticle}
                        </p>
                        <div className="article__text--action">
                            <button>
                                <Link to={`/blogs/${article.id}`}>
                                    READ MORE
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="blog__article__container">
                {this.renderBlogArticle()}
            </div>
        );
    }
}

export default BlogArticle;
