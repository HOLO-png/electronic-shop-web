/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { auth, db } from '../../../Firebase/config';
import { AuthContext } from '../../../Context/AuthProvider';
import { humanImg } from '../../../assets/fake-data/human';

function User(props) {
    const userDrawerRef = useRef(null);
    const [displayName, setDisplayName] = useState('');
    const data = React.useContext(AuthContext);
    const { email, photoURL, uid } = data.user;

    const renderPhotoAccout = (val) => {
        if (photoURL) {
            return (
                <img
                    src={photoURL}
                    alt={displayName}
                    className={`rounded-circle w-${val}`}
                ></img>
            );
        } else {
            return (
                <img
                    src={humanImg}
                    alt={displayName}
                    className={`rounded-circle w-${val}`}
                ></img>
            );
        }
    };
    React.useEffect(() => {
        db.collection('users').onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const array = { data }.data;
            setDisplayName(array[array.length - 1].displayName);
        });
    }, []);

    const someHandler = () => {
        if (userDrawerRef.current) {
            userDrawerRef.current.classList.add('active');
        }
    };

    const someOtherHandler = () => {
        if (userDrawerRef.current) {
            userDrawerRef.current.classList.add('active');
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (
                !e.target.closest('#userId') &&
                !e.target.closest('#userDrawerId')
            ) {
                if (userDrawerRef.current) {
                    userDrawerRef.current.classList.remove('active');
                }
            }
        });
        return () => {
            window.removeEventListener('mousemove', null);
        };
    }, []);

    return (
        <div className="header__menu__item header__menu__right__item">
            <div
                className="header__menu__item__user"
                onMouseEnter={someHandler}
                onMouseLeave={someOtherHandler}
                id="userId"
            >
                <Link to="/user/all">
                    <div className="header__menu__item__user-icon">
                        {renderPhotoAccout(50)}
                    </div>
                </Link>
                <div
                    className="header__menu__item__user-drawer"
                    id="userDrawerId"
                    ref={userDrawerRef}
                >
                    <div className="header__menu__item__user-drawer-accout">
                        {renderPhotoAccout(25)}
                        <span className="display-name-user">{displayName}</span>
                    </div>
                    <div className="header__menu__item__user-drawer-accout">
                        <i className="fad fa-calendar-week"></i>
                        <span>Đơn mua</span>
                    </div>
                    <div className="header__menu__item__user-drawer-accout">
                        <i className="fad fa-sign-in-alt"></i>
                        <a onClick={() => auth.signOut()}>
                            <span>Đăng xuất</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

User.propTypes = {};

export default User;
