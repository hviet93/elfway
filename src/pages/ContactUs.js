import React, {Fragment} from "react";
import Header from "../components/Header/Header.component";
import ContactUsHeader from "../components/ContactUsHeader/ContactUsHeader.component";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm.component";
import ContactUsInfo from "../components/ContactUsInfo/ContactUsInfo.component";
import Footer from "../components/Footer/Footer.component";

const ContactUs = () => {
    return (
        <Fragment>
            <Header/>
            <ContactUsHeader/>
            <ContactUsForm/>
            <ContactUsInfo/>
            <Footer/>
        </Fragment>
    )
}

export default ContactUs;
