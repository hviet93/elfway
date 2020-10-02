import React from "react";
import './AboutUsHeader.styled.scss';

const AboutUsHeader = () => {
    return (
        <div className="about-us__header">
            <div className="about-us__header--breadcrumb">
                <span className="breadcrumb__icon">
                    <i className="fas fa-home"/>
                </span>
                <span className="breadcrumb__title highlight-text">About Us</span>
            </div>
            <div className="about-us__header--title">
                <h1>About Us</h1>
            </div>
        </div>
    )
}

export default AboutUsHeader;
