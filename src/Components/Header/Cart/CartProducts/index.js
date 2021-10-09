import React from 'react';
import PropTypes from 'prop-types';
import numberWithCommas from '../../../../utils/numberWithCommas';

function CartProducts(props) {
    const { product } = props;

    return (
        <div className="header__menu__item__cart-drawer__products__item">
            <div className="header__menu__item__cart-drawer__products__img">
                <img alt={product.name} src={product.image[0]} />
            </div>
            <div className="header__menu__item__cart-drawer__products__title">
                {product.name}
            </div>
            <div className="header__menu__item__cart-drawer__products__price">
                {numberWithCommas(product.price)} <sub>đ</sub>
            </div>
        </div>
    );
}

CartProducts.propTypes = {
    product: PropTypes.object,
};

export default CartProducts;
