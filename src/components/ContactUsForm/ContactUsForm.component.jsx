import React from "react";
import './ContactUsForm.styled.scss';
import ContactMap from "../ContactMap/ContactMap.component";

//https://validatejs.org/
class ContactUsForm extends React.Component {

    render() {
        return (
            <div className="contact__form__container">
                <div className="contact__form__map" id="contact__map">
                    <ContactMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAv_wsNUH9CTiBRd8-ld2h1l5S58_fHvb0&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className="contact__form__message">
                    <form action="#" className="contact__form">
                        <div  className="contact__form--header">
                            <h1>TELL US YOUR MESSAGE</h1>
                            <p>
                                Your email address will not be published.
                                Required fields are marked *
                            </p>
                        </div>
                        <div className="contact__form--name">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="e.g., John Doe"
                                className="contact__input__name"
                            />
                        </div>
                        <div className="contact__form--phone-email">
                            <div className="contact__form--phone">
                                <label htmlFor="phone">Your Phone *</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    className="contact__input__phone"/>
                            </div>
                            <div className="contact__form--email">
                                <label htmlFor="email">Your Email *</label>
                                <input type="email"
                                       id="email"
                                       placeholder="name@example.com"
                                       className="contact__input__email"
                                />
                            </div>
                        </div>
                        <div className="contact__form--message-text">
                            <label htmlFor="message">Your Message *</label>
                            <textarea
                                id="message"
                                className="contact__input__message"
                                rows="5"
                            />
                        </div>
                        <div className="contact__form--message-action">
                            <button className="contact__btn">CONTACT US</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUsForm;
