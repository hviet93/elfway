import React from 'react';
import './LoginModal.styled.scss';

const LoginModal = () => {
    return (
        <div className="hide-modal">
            <div className="modal__background"></div>
            <div class="login__modal">
                <div class="modal__close">
                    <span><i class="fas fa-times-circle close-modal"></i></span>
                </div>
                <div class="login__form--header">
                    <h1>Sign In</h1>
                    <a href="#">Create an Account</a>
                </div>
                <form action="#" autocomplete="off">
                    <div class="modal__form--username">
                        <label class="form-label-style" for="username">Username or email <span class="required">*</span></label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div class="modal__form--password">
                        <label class="form-label-style" for="password">Password <span class="required">*</span></label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div class="login__form--action">
                        <button type="submit">LOGIN</button>
                        <span>
                            <a href="#">Lost your password?</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;