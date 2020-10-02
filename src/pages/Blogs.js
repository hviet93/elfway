import React from "react";
import Header from "../components/Header/Header.component";
import BlogHeader from "../components/BlogHeader/BlogHeader.component";
import BlogContainer from "../components/BlogContainer/BlogContainer.component";
import Footer from "../components/Footer/Footer.component";

const Blogs = () => {
    const blogTitleStyle = {
        width: '100%',
        padding: '.5rem'
    };

    return (
        <React.Fragment>
            <Header/>
            <BlogHeader/>
            <div style={blogTitleStyle}>
                <h1>Blog</h1>
            </div>
            <BlogContainer/>
            <Footer/>
        </React.Fragment>
    )
}

export default Blogs;
