import React from 'react';
import Header from "../components/Header/Header.component";
import AboutUsHeader from "../components/AboutUsHeader/AboutUsHeader.component";
import AboutUsElementor from "../components/AboutUsElementor/AboutUsElementor.component";
import AboutUsBenefits from "../components/AboutUsBenefits/AboutUsBenefits.component";
import AboutUsStory from "../components/AboutUsStory/AboutUsStory.component";
import AboutUsClient from "../components/AboutUsClient/AboutUsClient.component";
import AboutUsExpert from "../components/AboutUsExpert/AboutUsExpert.component";
import Footer from "../components/Footer/Footer.component";

class AboutUs extends React.Component {
    style = {
        marginTop: '1rem'
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div style={this.style}>
                    <AboutUsHeader/>
                    <AboutUsElementor/>
                    <AboutUsBenefits/>
                    <AboutUsStory/>
                    <AboutUsClient/>
                    <AboutUsExpert/>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutUs;
