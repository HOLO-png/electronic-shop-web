import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import numberWithCommas from '../../utils/numberWithCommas';
import { Badge, Rate, Tag } from 'antd';
function ProductCart(props) {
    const {
        id,
        name,
        price,
        status,
        star,
        category,
        image,
        priceOld,
        height,
        img_width,
        right,
    } = props;
    const handleStatus = () => {
        if (status) {
            return 'block';
        } else {
            return 'none';
        }
    };
    const name_url = name.replace(/ /g, '-');

    return (
        <Badge.Ribbon
            text="Hot"
            color="red"
            style={{ right: right, display: handleStatus() }}
        >
            <div className="product-cart" style={{ height: height + 'px' }}>
                <Link to={`/${category}/${name_url}/${id}`}>
                    <div className="product-cart__image">
                        <img
                            src={image[0][0]}
                            alt={name}
                            style={{ height: img_width }}
                        />
                        {image[1] ? (
                            <img
                                src={image[1][0]}
                                alt={name}
                                style={{ height: img_width }}
                            />
                        ) : (
                            <img
                                src={image[0][0]}
                                alt={name}
                                style={{ height: img_width }}
                            />
                        )}
                    </div>
                    <h3 className="product-cart__name">{name}</h3>
                    <div className="product-cart-evaluate">
                        <Rate
                            disabled
                            defaultValue={star ? +star : 0}
                            style={{ marginTop: '12px' }}
                        />
                        <p className="product-cart-sold">đã bán 100+</p>
                    </div>
                    <div className="product-cart__price">
                        {numberWithCommas(price[0])} <sup> đ</sup>
                        <Tag color="#ff4c4c">- 40%</Tag>
                        <div className="product-cart__price-old">
                            <del>{numberWithCommas(priceOld[0])} đ</del>
                        </div>
                    </div>
                </Link>
            </div>
        </Badge.Ribbon>
    );
}

ProductCart.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.array.isRequired,
};

export default ProductCart;
