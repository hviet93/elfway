import React from "react";
import './Story.styled.scss';

import StoryImg from './../../assets/home/elementor/img_our_stories.png'
import StoryImg2 from './../../assets/home/elementor/bg_992.jpg'
import LogoImg from './../../assets/home/elementor/efway_logo.png'

const Story = () => {
    return (
        <div className="story">
            <div className="story__image--1">
                <img src={StoryImg} alt="Story 1"/>
            </div>
            <div className="story__image--2">
                <img src={StoryImg2} alt="Story 2"/>
            </div>
            <div className="story__text">
                <div className="story__title">
                    <span>OUR STORIES</span>
                </div>
                <div className="story__content">
                    <div className="story__content--title">
                        <span>We Are&nbsp;</span>
                        <span>Healthy Food&nbsp;</span>
                        <span>Organic.</span>
                    </div>
                    <div className="story__content--paragraph">
                        <p>
                            We’ve recently updated our entire product portfolio
                            to give customers and partners the best products
                            with the newest technology.
                        </p>
                    </div>
                    <div className="story__content--logo">
                        <img src={LogoImg} alt="Logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story;
