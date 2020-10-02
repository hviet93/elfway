import React from "react";
import './BlogArticleDetail.styled.scss';
import blogImg_1 from "../../assets/blogs/blog-1.jpg";
import blogImg_2 from "../../assets/blogs/blog-2.jpg";
import blogImg_3 from "../../assets/blogs/blog-3.jpg";
import blogImg_4 from "../../assets/blogs/blog-4.jpg";
import blogImg_5 from "../../assets/blogs/blog-5.jpg";
import blogImg_6 from "../../assets/blogs/blog-6.jpg";
import blogImg_7 from "../../assets/blogs/blog-7.jpg";
import blogImg_8 from "../../assets/blogs/blog-8.jpg";
import blogImg_9 from "../../assets/blogs/blog-9.jpg";
import blogImg_10 from "../../assets/blogs/blog-10.jpg";
import blogDetailImg from "../../assets/blogs/blog-detail.jpg";

const BlogArticleDetail = (props) => {
    const articleData = [
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
    //const blogId = props.match ? props.match.params.blogId : 1;
    const blogId = parseInt(window.location.pathname.split("/")[2]);
    const headerDetail = articleData.filter(article => article.id === blogId)[0];

    return (
        <div className="blog__article-detail__container">
            <div className="blog__article-detail__header">
                <div className="article-detail__header__img">
                    <img src={headerDetail.image} alt="Header"/>
                </div>
                <div className="article-detail__header__title">
                    <h1>{headerDetail.title}</h1>
                </div>
                <div className="article-detail__header__date">
                    <span>
                        <i className="far fa-calendar-alt highlight-text"/>&nbsp;
                        {headerDetail.date}
                    </span>
                    <span>
                        <i className="fas fa-comments highlight-text"/>&nbsp;
                        {headerDetail.comment.length} Comments
                    </span>
                </div>
            </div>
            <div className="blog__article-detail__body">
                <p>
                    Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est.
                    Ut mi metus, semper eu dictum nec, condimentum sed sapien.
                    Nullam lobortis nunc semper ipsum luctus ut viverra ante eleifend.
                    Nunc pretium velit sed augue luctus accumsan.
                    Aliquam laoreet consequat malesuada.
                    Integer vitae diam sed dolor euismod laoreet eget ac
                </p>
                <p>
                    Some people say one thing is better, but research shows A, B, and C are better.
                    Then research comes out showing that X, Y, and Z are just as effective.
                    Basically there is no one set way to approach many sports nutrition topics,
                    BUT there is more widely accepted ways to approach them.
                    Sports nutrition is a very large topic and the schools of thought are very diverse.
                </p>
                <div className="article-detail__body__mid">
                    <div className="article-detail__body__mid--img">
                        <img src={blogDetailImg} alt="Blog Detail"/>
                    </div>
                    <div className="article-detail__body__mid--text">
                        <p>
                            Carbohydrates. The ideal carb to protein ratio is about 3:1.
                            This is just my recommendation. Some dietitians say 4:1 and this may be true for some athletes but not all athletes.
                            Any carbs are not ideal either, ideally fast absorbing carbs like glucose and fruit.
                            Protein’s are mainly absorbed in the small intestine.
                            If the stomach is emptied to slowly you are not going to meet your 30-60 minute “window” to refuel your body and rebuild your muscles.
                        </p>
                        <p>
                            These are all VERY general and broad guidelines and for a more in depth individualized detailed plan contact me or a local dietitian.
                            As always don’t embark on a new journey of health and/or fitness without consulting your doctor first.
                        </p>
                    </div>
                </div>
                <p>
                    Protein. Most studies show that 1.2-2 grams of protein per kilogram PER DAY is ideal.
                    Of course this is America and we can’t make things simple because we use pounds here.
                </p>
                <p>
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                </p>
                <blockquote className="article-detail__quote">
                    <div className="article-detail__quote--left">
                        <p>"</p>
                    </div>
                    <div className="article-detail__quote--right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                            ut fermentum massa justo sit amet risus. Integer posuere erat.
                        </p>
                    </div>
                </blockquote>
                <h4>Ready For Perfect Fitness</h4>
                <p>
                    Leos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt
                    ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                </p>
                <div className="article-detail__body__bottom">
                    <ul>
                        <li>
                            <span><i className="far fa-check-circle"/></span>
                            Train with the best experts in bodybuilding field.
                        </li>
                        <li>
                            <span><i className="far fa-check-circle"/></span>
                            Our personal trainers will help you find a perfect workout.
                        </li>
                        <li>
                            <span><i className="far fa-check-circle"/></span>
                            Trainers will build your perfect cardio workout.
                        </li>
                        <li>
                            <span><i className="far fa-check-circle"/></span>
                            Proin gravida nibh vel velit auctor aliquet.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogArticleDetail;
