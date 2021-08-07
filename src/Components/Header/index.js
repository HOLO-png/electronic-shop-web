import React, { useEffect, useRef } from 'react';
import logo from '../../assets/images/apple_logo_PNG19667.png';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import Cart from './Cart';
import User from './User';

const mainNav = [
    {
        display: 'Home',
        path: '/home',
    },
    {
        display: 'Catalog',
        path: '/catalog',
    },
    {
        display: 'Accessories',
        path: '/accessories',
    },
    {
        display: 'Contact',
        path: '/contact',
    },
];

export default function Header() {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);

    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (headerRef.current) {
                if (
                    document.body.scrollTop > 80 ||
                    document.documentElement.scrollTop > 80
                ) {
                    headerRef.current.classList.add('shrink');
                } else {
                    headerRef.current.classList.remove('shrink');
                }
            }
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    const menuLeft = useRef(null);

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
    };

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} className="header__logo-home" alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div
                        className="header__menu__mobile-toggle"
                        onClick={menuToggle}
                    >
                        <box-icon name="menu-alt-left"></box-icon>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div
                            className="header__menu__left__close"
                            onClick={menuToggle}
                        >
                            <box-icon name="x-circle"></box-icon>
                        </div>
                        {mainNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item header__menu__left__item ${
                                    index === activeNav ? 'active' : ''
                                }`}
                                onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__right">
                        <Search />
                        <Cart />
                        <User />
                    </div>
                </div>
            </div>
        </div>
    );
}
