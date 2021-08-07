import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import CartProducts from './CartProducts';

function Cart(props) {
    const cartDrawerRef = useRef(null);

    const someHandler = () => {
        if (cartDrawerRef.current) {
            cartDrawerRef.current.classList.add('active');
        }
    };

    const someOtherHandler = () => {
        if (cartDrawerRef.current) {
            cartDrawerRef.current.classList.add('active');
        }
    };
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (
                !e.target.closest('#cartId') &&
                !e.target.closest('#cartDrawerId')
            ) {
                if (cartDrawerRef.current) {
                    cartDrawerRef.current.classList.remove('active');
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
                className="header__menu__item__cart"
                onMouseEnter={someHandler}
                onMouseLeave={someOtherHandler}
                id="cartId"
            >
                <Link to="/cart">
                    <i className="fab fa-opencart"></i>
                </Link>
                <p>1</p>

                <div
                    className="header__menu__item__cart-drawer"
                    ref={cartDrawerRef}
                    id="cartDrawerId"
                >
                    <span className="header__menu__item__cart-drawer__title">
                        Add new product
                    </span>
                    <div className="header__menu__item__cart-drawer__products">
                        <CartProducts />
                        <CartProducts />
                        <CartProducts />
                        <CartProducts />
                    </div>
                    <Button size="sm" icon="shopping-basket" animate={true}>
                        View cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {};

export default Cart;
