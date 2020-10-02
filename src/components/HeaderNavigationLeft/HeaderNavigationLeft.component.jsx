import React from "react";
import './HeaderNavigationLeft.styled.scss';
import {Link} from "react-router-dom";

class HeaderNavigationLeft extends React.Component {

    closeNavigationLeft = (e) => {
        const closeNavClassName = e.target.className;
        const navLeftEle = document.querySelector('.header__nav__left__container--display');
        const bodyDoc = document.querySelector("body");

        if(
            (closeNavClassName.includes("header__nav__close__click")
                || closeNavClassName.includes("header__left__bg"))
                && navLeftEle)
        {
            navLeftEle.classList.remove("header__nav__left__container--display");
            bodyDoc.classList.remove("translate__body");
            bodyDoc.classList.add("translate__body--original");
        }
    }

    render() {
        return (
            <div className="header__nav__left__container">
                <div
                    className="header__left__bg"
                    onClick={(e) => this.closeNavigationLeft(e)}
                />
                <div className="header__left__navigation">
                    <div className="header__nav__close header__nav__close__click">
                    <span
                        className="header__nav__close__click"
                        onClick={(e) => this.closeNavigationLeft(e)}
                    >
                        CLOSE <i className="fas fa-times header__nav__close__click"/>
                    </span>
                    </div>
                    <div className="header__nav__list-item">
                        <ul>
                            <li className="header__nav--item">
                                <Link to="#">Home</Link>
                            </li>
                            <li className="header__nav--item">
                                <Link to="#">Pages</Link>
                            </li>
                            <li className="header__nav--item">
                                <Link to="#">Blog</Link>
                            </li>
                            <li className="header__nav--item">
                                <Link to="#">On Sale</Link>
                            </li>
                            <li className="header__nav--item">
                                <Link to="#">About Us</Link>
                            </li>
                            <li className="header__nav--item">
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderNavigationLeft;
