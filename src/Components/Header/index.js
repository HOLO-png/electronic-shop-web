import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import Search from './Search';
import Cart from './Cart';
import User from './User';
import Light from './Light';

const mainNav = [
    {
        display: 'TRANG CHỦ',
        path: '/home',
        showld: true,
    },
    {
        display: 'HÀNG MỚI',
        path: '/catalog',
        showld: true,
    },
    {
        display: 'PHỔ BIẾN',
        path: '/accessories',
        showld: true,
    },
    {
        display: 'TIN TỨC',
        path: '/news',
        showld: true,
    },
];

export default function Header(props) {
    const {
        cartProduct,
        searchItem,
        insertSearchItemUser,
        removeSearchItem,
        handleChangeTheme,
        email,
    } = props;
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);
    const headerRef = useRef(null);
    const [width, setWidth] = useState(0);

    let totalHeight = document.body.scrollHeight - window.innerHeight;

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

    useEffect(() => {
        window.onscroll = function () {
            let progress = (window.pageYOffset / totalHeight) * 100;
            setWidth(progress);
        };
    }, [totalHeight]);

    return (
        <div className="header" ref={headerRef}>
            <Light handleChangeTheme={handleChangeTheme} />
            <div
                className="header__scroll"
                style={{ width: width + '%' }}
            ></div>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"
                            className="header__logo-home"
                            alt=""
                        />
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
                                // style={{ color: themeItem.text_color }}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                                <div className="header__menu__hover__animation"></div>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__right">
                        <Search
                            searchItem={searchItem}
                            insertSearchItemUser={insertSearchItemUser}
                            removeSearchItem={removeSearchItem}
                            // themeItem={themeItem}
                        />
                        <Cart cartProduct={cartProduct} />
                        <User email={email} />
                    </div>
                </div>
            </div>
        </div>
    );
}
