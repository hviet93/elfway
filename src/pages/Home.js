import React from 'react';

import Header from "../components/Header/Header.component";
import HomeImageSlider from "../components/HomeImageSlider/HomeImageSlider.component";
import FeatureProducts from "../components/FeatureProducts/FeatureProducts.component";
import Widget from "../components/Widget/Widget.component";
import Story from "../components/Story/Story.component";
import Footer from "../components/Footer/Footer.component";
import Elementor from "../components/Elementor/Elementor.component";
import HeaderLoginModal from "../components/HeaderLoginModal/HeaderLoginModal.component";
import HeaderNavigationLeft from "../components/HeaderNavigationLeft/HeaderNavigationLeft.component";

class Home extends React.Component {
    render() {
        return (
          <React.Fragment>
              <Header/>
              <HomeImageSlider/>
              <Widget/>
              <Story/>
              <FeatureProducts/>
              <Elementor/>
              <Footer/>
              <HeaderLoginModal/>
              <HeaderNavigationLeft/>
          </React.Fragment>
        );
    }
}

export default Home;
