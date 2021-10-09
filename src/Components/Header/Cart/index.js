import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import CartProducts from './CartProducts';
import { Empty } from 'antd';

function Cart(props) {
    const { cartProduct } = props;
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

                {cartProduct.length ? <p>{cartProduct.length}</p> : null}

                <div
                    className="header__menu__item__cart-drawer"
                    ref={cartDrawerRef}
                    id="cartDrawerId"
                >
                    <span className="header__menu__item__cart-drawer__title">
                        Add new product
                    </span>
                    <div className="header__menu__item__cart-drawer__products">
                        {cartProduct.length ? (
                            cartProduct.map((item, index) => (
                                <CartProducts key={index} product={item} />
                            ))
                        ) : (
                            <Empty style={{ marginTop: 40 }} />
                        )}
                    </div>
                    <Link to="/cart" style={{ width: '100%' }}>
                        <Button
                            size="sm"
                            icon="shopping-basket"
                            animate={true}
                            width="100%"
                        >
                            View cart
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {};

export default Cart;
