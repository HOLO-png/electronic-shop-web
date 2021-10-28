import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Signin from './Signin';
import Signup from './Signup';
import firebase, { auth, db } from '../../Firebase/config';
import { addDocument } from '../../Firebase/Services';
import { AuthContext } from '../../Context/AuthProvider';
function LoginForm(props) {
    const [isActive, setIsActive] = useState(false);
    const data = useContext(AuthContext);
    const { id } = data.user;

    const isShowSignup = () => {
        setIsActive(!isActive);
    };
    const history = useHistory();

    const handleLoginSignin = async (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(val.email, val.password)
                    .then((data) => {
                        toast.success(`Chào mừng bạn quay lại 🥰`);
                        window.localStorage.setItem(
                            'emailForRegistration',
                            JSON.stringify(val.email),
                        );
                        db.collection('users')
                            .doc(id)
                            .update({
                                isOnline: true,
                            })
                            .then((data) => {})
                            .catch((err) => {});
                        history.push('/home');
                    })
                    .catch((err) => {
                        toast.error(
                            `Lỗi không mong muốn, tài khoản bạn nhập không chính xác, vui lòng nhập lại 🤨`,
                        );
                        history.push('/login');
                        return;
                    });

                resolve(true);
            }, 1000);
        });
    };

    const handleLoginSignup = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                auth.createUserWithEmailAndPassword(val.email, val.password)
                    .then((result) => {
                        let config = {
                            url: 'https://localhost:1901',
                            handleCodeInApp: true,
                        };
                        auth.sendSignInLinkToEmail(val.email, config)
                            .then(() => {
                                toast.success(
                                    `Email is sent to ${val.email}, Click the link to complete your registration. 😁`,
                                );
                                window.localStorage.setItem(
                                    'emailForRegistration',
                                    JSON.stringify(val.email),
                                );
                            })
                            .catch((error) => {
                                toast.error(
                                    `lỗi không mong muốn vui lòng nhập lại thông tin🤨`,
                                );
                            });
                    })
                    .then((data) => {
                        addDocument('users', {
                            displayName: val.name,
                            email: val.email,
                            photoURL: null,
                            uid: val.name,
                            address: [],
                            isOnline: false,
                        });
                    })
                    .catch((err) => {
                        toast.error(
                            `lỗi không mong muốn vui lòng nhập lại thông tin🤨`,
                        );
                        history.push('/login');
                        return;
                    });

                resolve(true);
            }, 1000);
        });
    };

    return (
        <div className="form">
            <div
                className={
                    isActive ? 'container right-panel-active' : 'container'
                }
            >
                <Signup onSubmit={handleLoginSignup} />
                <Signin onSubmit={handleLoginSignin} />

                <div className="form__overlay-container">
                    <div className="form__overlay">
                        <div className="form__overlay-panel form__overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="form__overlay-panel form__overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>
                                Enter your personal details and start journey
                                with us
                            </p>
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="form__footer">
                <p>
                    Shop điện tử Iphone <i className="fa fa-heart" /> của
                    <a type="link"> Hoàng Long</a> - Xin chân thành cảm ơn quý
                    khách đã ghé qua ạ
                </p>
            </footer>
        </div>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
