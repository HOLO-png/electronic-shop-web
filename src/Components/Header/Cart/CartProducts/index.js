import React from 'react';
import PropTypes from 'prop-types';

function CartProducts(props) {
    return (
        <div className="header__menu__item__cart-drawer__products__item">
            <div className="header__menu__item__cart-drawer__products__img">
                <img
                    alt=""
                    src="http://assets.stickpng.com/thumbs/5e90a834c7c8f9000434dd96.png"
                />
            </div>
            <div className="header__menu__item__cart-drawer__products__title">
                Iphone 12 Promax
            </div>
            <div className="header__menu__item__cart-drawer__products__price">
                200$
            </div>
        </div>
    );
}

CartProducts.propTypes = {};

export default CartProducts;
