import React from "react";
import {Link} from "react-router-dom";
import './Footer.styled.scss';

//import footerBackgroundImg from './../../assets/footer/footer-bg.png';

import satisfactionImg from './../../assets/footer/satisfaction.png';
import saveMoneyImg from './../../assets/footer/save-money.png';
import fastShippingImg from './../../assets/footer/fast-shipping.png';
import moneyBackImg from './../../assets/footer/money-back.png';
import {ReactComponent as Logo} from './../../assets/footer/logo.svg'

import faceBookImg from './../../assets/footer/facebook.png';
import twitterImg from './../../assets/footer/twitter.png';
import instagramImg from './../../assets/footer/instagram.png';
import googlePlusImg from './../../assets/footer/google-plus.png';
import linkedinImg from './../../assets/footer/linkedin.png';

import supportImg from './../../assets/footer/support.png';
import paymentImg from './../../assets/footer/payments.png';

class Footer extends React.Component {

    style = {
        //backgroundImage: footerBackgroundImg,
        backgroundColor: '#fff'
    }

    render() {
        return(
            <div className="footer" style={this.style}>
                <div className="footer__guarantee">
                    <div className="guarantee__block">
                        <div className="block__title">
                            <div className="block__title--img">
                                <img src={satisfactionImg} alt="satisfaction"/>
                            </div>
                            <div className="block__title-name">
                                <span>100%</span>
                                <span>Satisfaction</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    <div className="guarantee__block">
                        <div className="block__title">
                            <div className="block__title--img">
                                <img src={saveMoneyImg} alt="save money"/>
                            </div>
                            <div className="block__title-name">
                                <span>Save 20%</span>
                                <span>when you</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    <div className="guarantee__block">
                        <div className="block__title">
                            <div className="block__title--img">
                                <img src={fastShippingImg} alt="fast shipping"/>
                            </div>
                            <div className="block__title-name">
                                <span>Fast Free</span>
                                <span>Shipment</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    <div className="guarantee__block">
                        <div className="block__title">
                            <div className="block__title--img">
                                <img src={moneyBackImg} alt="money back"/>
                            </div>
                            <div className="block__title-name">
                                <span>14-Day</span>
                                <span>Money Back</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                </div>
                <div className="footer__newsletter">
                    <div className="newsletter__block">
                        <h2>NEWSLETTER</h2>
                        <p>
                            Subscribe to the weekly newsletter for all the latest updates
                        </p>
                        <form>
                            <input type="text" placeholder="Your email address" />
                                <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <div className="footer__information">
                    <div className="information__logo">
                        <Logo className="logo"/>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        </p>
                        <div className="information__logo--social">
                            <img src={faceBookImg} alt="facebook"/>
                            <img src={twitterImg} alt="twitter"/>
                            <img src={instagramImg} alt="instagram"/>
                            <img src={googlePlusImg} alt="google plus"/>
                            <img src={linkedinImg} alt="linkedin"/>
                        </div>
                    </div>
                    <div className="information__info">
                        <h4 className="information--header">Company Info</h4>
                        <ul className="information--link">
                            <li>
                                <Link to="#">About Us</Link>
                            </li>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                            <li>
                                <Link to="#">Social Responsibility</Link>
                            </li>
                            <li>
                                <Link to="#">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link to="#">Business With Us</Link>
                            </li>
                            <li>
                                <Link to="#">Find a Store</Link>
                            </li>
                            <li>
                                <Link to="#">Press & Talent</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="information__links">
                        <h4 className="information--header">Quick Links</h4>
                        <ul className="information--link">
                            <li>
                                <Link to="#">Speacial Offer</Link>
                            </li>
                            <li>
                                <Link to="#">Gift Cards</Link>
                            </li>
                            <li>
                                <Link to="#">F21 Red</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">California Privacy Rights</Link>
                            </li>
                            <li>
                                <Link to="#">CA Transparencyy in Store</Link>
                            </li>
                            <li>
                                <Link to="#">Teams of Use</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="information__category">
                        <h4 className="information--header">Hot Categories</h4>
                        <ul className="information--link">
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">F21 Red</Link>
                            </li>
                            <li>
                                <Link to="#">Smartphone</Link>
                            </li>
                            <li>
                                <Link to="#">Gift Cards</Link>
                            </li>
                            <li>
                                <Link to="#">Battereies</Link>
                            </li>
                            <li>
                                <Link to="#">Handbag</Link>
                            </li>
                            <li>
                                <Link to="#">Shoes</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="information__contact">
                        <h4 className="information--header">Contact Us</h4>
                        <div className="contact__header">
                            <img src={supportImg} alt="contact" />
                                <div className="contact__header--content">
                                    <span>Through Whatsapp</span>
                                    <span>+084 008 46 789 </span>
                                </div>
                        </div>
                        <p>
                            GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022
                        </p>
                        <p>
                            support@example.com
                        </p>
                    </div>
                </div>
                <div className="copy-right">
                    <div>
                        Copyright © 2020 Efway. All Rights Reserved.
                    </div>
                    <div>
                        <img src={paymentImg} alt="payments"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
