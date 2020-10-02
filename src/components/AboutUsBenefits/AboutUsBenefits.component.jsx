import React from "react";
import './AboutUsBenefits.stylted.scss';

const AboutUsBenefits = () => {
    return (
        <div className="about-us__benefit__container">
            <div className="benefit__satisfaction">
                <div className="benefit__title">
                    <div className="benefit__title--icon">
                        <i className="far fa-snowflake"/>
                    </div>
                    <div className="benefit__title--text">
                        <h3>100%</h3>
                        <h3>Satisfaction</h3>
                    </div>
                </div>
                <div className="benefit__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>
            </div>
            <div className="benefit__save">
                <div className="benefit__title">
                    <div className="benefit__title--icon">
                        <i className="far fa-hand-point-left"/>
                    </div>
                    <div className="benefit__title--text">
                        <h3>Save 20%%</h3>
                        <h3>when you</h3>
                    </div>
                </div>
                <div className="benefit__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>
            </div>
            <div className="benefit__shipping">
                <div className="benefit__title">
                    <div className="benefit__title--icon">
                        <i className="fas fa-shipping-fast"/>
                    </div>
                    <div className="benefit__title--text">
                        <h3>Fast Free</h3>
                        <h3>Shipment</h3>
                    </div>
                </div>
                <div className="benefit__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>
            </div>
            <div className="benefit__money">
                <div className="benefit__title">
                    <div className="benefit__title--icon">
                        <i className="fas fa-money-check-alt"/>
                    </div>
                    <div className="benefit__title--text">
                        <h3>14-Day</h3>
                        <h3>Money back</h3>
                    </div>
                </div>
                <div className="benefit__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsBenefits;
