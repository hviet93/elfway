import React from "react";
import './ContactUsHeader.styled.scss';

const ContactUsHeader = () => {
    return (
        <div className="contact__header__container">
            <div className="contact__header__label">
                <span className="contact__header__label--icon">
                    <i className="fas fa-home"/>
                </span>
                <span className="contact__header__label--text">
                    Contact
                </span>
            </div>
            <div className="contact__header__title">
                <h1>Contact</h1>
            </div>
        </div>
    )
}

export default ContactUsHeader;
