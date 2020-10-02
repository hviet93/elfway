import React from "react";
import './BlogContainer.styled.scss';
import BlogCategory from "../BlogCategory/BlogCategory.component";
import BlogRecentPost from "../BlogRecentPost/BlogRecentPost.component";
import BlogTag from "../BlogTag/BlogTag.component";
import BlogArticle from "../BlogArticle/BlogArticle.component";

class BlogContainer extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        //footer location: 7296
        const blogContainerLeftElement = document.querySelector(".blog__container__left");
        const blogContainerLeftHiddenElement = document.querySelector(".blog__container__left--hidden");
        //const blogContainerLeftLocation = blogContainerLeftElement.getBoundingClientRect();

        if(window.scrollY >= 1197 && window.scrollY <= 7296) {
            blogContainerLeftElement.classList.add("fixed__element--top");
            blogContainerLeftHiddenElement.classList.add("show-element");
            blogContainerLeftElement.classList.remove("fixed__element--bottom");
        }

        if(window.scrollY >= 7296) {
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
            <div className="blog__container">
                <div className="blog__container__left--hidden"/>
                <div className="blog__container__left">
                    <BlogCategory/>
                    <BlogRecentPost/>
                    <BlogTag/>
                </div>
                <div className="blog__container__right">
                    <BlogArticle/>
                </div>
            </div>
        );
    }
}

export default BlogContainer;
