import React from "react";
import './BlogDetailContainer.styled.scss';
import BlogCategory from "../BlogCategory/BlogCategory.component";
import BlogRecentPost from "../BlogRecentPost/BlogRecentPost.component";
import BlogTag from "../BlogTag/BlogTag.component";
import BlogArticleDetail from "../BlogArticleDetail/BlogArticleDetail.component";
import BlogDetailNavigatePost from "../BlogDetailNavigatePost/BlogDetailNavigatePost.component";
import BlogDetailComment from "../BlogDetailComment/BlogDetailComment.component";

class BlogDetailContainer extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        window.scrollTo(0,0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = e => {
        const blogContainerLeftElement = document.querySelector(".blog__container__left");
        const blogContainerLeftHiddenElement = document.querySelector(".blog__container__left--hidden");
        //const blogContainerLeftLocation = blogContainerLeftElement.getBoundingClientRect();

        if(window.scrollY >= 1197 && window.scrollY < 1767) {
            blogContainerLeftElement.classList.add("fixed__element--top");
            blogContainerLeftHiddenElement.classList.add("show-element");
            blogContainerLeftElement.classList.remove("fixed__element--bottom");
        }

        if(window.scrollY >= 1767) {
            blogContainerLeftElement.classList.remove("fixed__element--top");
            blogContainerLeftElement.classList.add("fixed__element--bottom");
        }

        if (window.scrollY < 1197){
            blogContainerLeftElement.classList.remove("fixed__element--top");
            blogContainerLeftHiddenElement.classList.remove("show-element");
        }
    }

    render() {
        return (
            <div className="blog-detail__container">
                <div className="blog__container__left--hidden"/>
                <div className="blog__container__left">
                    <BlogCategory/>
                    <BlogRecentPost/>
                    <BlogTag/>
                </div>
                <div className="blog__container__right">
                    <BlogArticleDetail/>
                    <BlogDetailNavigatePost/>
                    <BlogDetailComment match={this.props.match}/>
                </div>
            </div>
        );
    }
}

export default BlogDetailContainer;
