import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import numberWithCommas from '../../utils/numberWithCommas';

function ProductCart(props) {
    const { img01, img02, name, price, slug } = props;
    return (
        <div className="product-cart">
            <Link to={`/catalog/${slug}`}>
                <div className="product-cart__image">
                    <img src={img01} alt={name} />
                    <img src={img02} alt={name} />
                </div>
                <h3 className="product-cart__name">{name}</h3>
                <div className="product-cart__price">
                    {numberWithCommas(price)}$
                    <div className="product-cart__price-old">
                        <del>{numberWithCommas('350')}$</del>
                    </div>
                </div>
            </Link>
            <div className="product-cart__btn">
                <Button size="sm" icon="shopping-bag" animate={true}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
}

ProductCart.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCart;
