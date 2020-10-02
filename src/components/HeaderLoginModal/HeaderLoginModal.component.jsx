import React from "react";
import './HeaderLoginModal.styled.scss';
import {Link} from "react-router-dom";

class HeaderLoginModal extends React.Component {
    closeModal = (e) => {
        const closeClassName = e.target.className;
        const loginModal = document.querySelector(".header__login-modal__container--display");

        if(
            (closeClassName === 'fas fa-times-circle' || closeClassName === 'login__modal__bg')
            && loginModal
        ) {
            loginModal.classList.remove("header__login-modal__container--display");
        }
    }

    render() {
        return (
            <div className="header__login-modal__container">
                <div
                    className="login__modal__bg"
                    onClick={(e) => this.closeModal(e)}
                />
                <div className="login__modal">
                    <div className="login__modal__close">
                        <span>
                            <i
                                className="fas fa-times-circle"
                                onClick={(e) => this.closeModal(e)}
                            />
                        </span>
                    </div>
                    <div className="login__modal__header">
                        <h2>Sign In</h2>
                        <Link to="#">
                            Create an Account
                        </Link>
                    </div>
                    <div className="login__modal__body">
                        <form
                            className="login__modal__form"
                            action="#"
                            autoComplete="off">
                            <div className="login__modal__username">
                                <label className="login-modal-label" htmlFor="username">
                                    Username or email <span className="required">*</span>
                                </label>
                                <input
                                    className="login-modal-input"
                                    name="username"
                                    type="text"
                                    placeholder="Username"/>
                            </div>
                            <div className="login__modal__password">
                                <label
                                    className="login-modal-label"
                                    htmlFor="password">
                                    Password
                                    <span className="required">*</span>
                                </label>
                                <input
                                    className="login-modal-input"
                                    name="password"
                                    type="text"
                                    placeholder="Password"/>
                            </div>
                            <div className="login__modal__action">
                                <button>
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="login__modal__footer">
                        <Link to="#">
                            Lost your password?
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderLoginModal;
