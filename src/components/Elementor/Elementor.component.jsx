import React from "react";
import './Elementor.styled.scss';

import leftImg from './../../assets/home/background/bg-home-widget-article_1.jpg';
import rightTopImg from './../../assets/home/background/bg-home-widget-article_2.jpg';
import rightBotImg from './../../assets/home/background/bg-home-widget-article_3.jpg';

const Elementor = () => {
    return (
        <div className="elementor">
            <div className="elementor__left">
                <div className="elementor__left--img">
                    <img className="img-bg-elementor" src={leftImg} alt="Left"/>
                </div>
                <div className="elementor__left--text">
                    <div className="elementor__title">
                        <h1>Fruit</h1>
                        <h1>Corner</h1>
                    </div>
                    <div className="elementor__paragraph">
                        <p>
                            Healthy Organic Vegetables Sale 20% Off
                        </p>
                    </div>
                    <div className="elementor__btn">
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="elementor__right">
                <div className="elementor__right--top">
                    <div className="elementor__right__top--img">
                        <img className="img-bg-elementor" src={rightTopImg} alt="Right Top"/>
                    </div>
                    <div className="elementor__right__top--text">
                        <div className="elementor__title">
                            <h1>Fast Foot</h1>
                            <h1>recipes</h1>
                        </div>
                        <div className="elementor__paragraph">
                            <p>
                                Fresh, nourishing and always delicious.
                                Check out our favourite recipes for a fruity revival.
                            </p>
                        </div>
                        <div className="elementor__btn">
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="elementor__right--bot">
                    <div className="elementor__right__bot--img">
                        <img src={rightBotImg} className="img-bg-elementor" alt="Right Bot"/>
                    </div>
                    <div className="elementor__right__bot--text">
                        <div className="elementor__title">
                            <h1>Our Drinks</h1>
                        </div>
                        <div className="elementor__paragraph">
                            <p>
                                To create the perfect juice nature does all the work.
                            </p>
                        </div>
                        <div className="elementor__btn">
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Elementor
