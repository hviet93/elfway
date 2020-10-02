import React from "react";
import './AboutUsElementor.styled.scss';

import elementorImg from './../../assets/about-us/about-us-elementor.jpg';
import logoImg from './../../assets/home/elementor/efway_logo.png';

const AboutUsElementor = () => {
    return (
        <div className="about-us__elementor__container">
            <div className="about-us__elementor__section--img">
                <img className="about__elementor__img" src={elementorImg} alt="Elementor"/>
            </div>
            <div className="about-us__elementor__section--content">
                <div className="about__elementor__content--story">
                    <h2>OUR STORIES</h2>
                </div>
                <div className="about__elementor__content--text">
                    <div className="about__elementor--title">
                        <span>We Are&nbsp;</span>
                        <span>Healthy&nbsp;</span>
                        <span>Food Organic.</span>
                    </div>
                    <div className="about__elementor--paragraph">
                        <p>
                            We’ve recently updated our entire product portfolio
                            to give customers and partners the best products
                            with the newest technology.
                        </p>
                    </div>
                    <div className="about-us__elementor__logo">
                        <img src={logoImg} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsElementor;
