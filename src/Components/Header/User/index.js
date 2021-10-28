/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { auth, db } from '../../../Firebase/config';
import { AuthContext } from '../../../Context/AuthProvider';
import { renderPhotoAccout } from '../../../utils/avartarChange';

function User(props) {
    const userDrawerRef = useRef(null);
    const data = React.useContext(AuthContext);
    const { photoURL, displayName, email, id } = data.user;

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

    const handleLogout = () => {
        db.collection('users')
            .doc(id)
            .update({
                isOnline: false,
            })
            .then((data) => {
                auth.signOut().then(() => {
                    localStorage.clear();
                });
            })
            .catch((err) => {});
    };

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
                        {renderPhotoAccout(photoURL, '', displayName)}
                    </div>
                </Link>
                <div
                    className="header__menu__item__user-drawer"
                    id="userDrawerId"
                    ref={userDrawerRef}
                >
                    <div className="header__menu__item__user-drawer-accout">
                        {renderPhotoAccout(photoURL, 'small', displayName)}
                        <span
                            className="display-name-user"
                            style={{ marginLeft: 5 }}
                        >
                            {displayName}
                        </span>
                    </div>
                    <div className="header__menu__item__user-drawer-accout">
                        <i className="fad fa-calendar-week"></i>
                        <span>Đơn mua</span>
                    </div>
                    {email === 'long47004@donga.edu.vn' ? (
                        <Link to="/dashboard/main">
                            <div className="header__menu__item__user-drawer-dashboard">
                                <i className="fad fa-tachometer-slowest"></i>
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    ) : (
                        ''
                    )}
                    <div className="header__menu__item__user-drawer-accout">
                        <i className="fad fa-sign-in-alt"></i>
                        <a onClick={() => handleLogout()}>
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
