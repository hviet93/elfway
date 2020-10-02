import React from "react";
import Header from "../components/Header/Header.component";
import BlogHeader from "../components/BlogHeader/BlogHeader.component";
import Footer from "../components/Footer/Footer.component";
import BlogDetailContainer from "../components/BlogDetailContainer/BlogDetailContainer.component";

const BlogDetail = (props) => {

    return (
        <React.Fragment>
            <Header/>
            <BlogHeader/>
            <BlogDetailContainer match={props.match}/>
            <Footer/>
        </React.Fragment>
    )
}

export default BlogDetail;
