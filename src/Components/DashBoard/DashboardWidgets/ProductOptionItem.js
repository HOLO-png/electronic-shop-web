/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

function ProductOptionItem(props) {
    const { item, handleShowTableProduct } = props;

    return (
        <div
            className="row product-hunt"
            onClick={() => handleShowTableProduct(item.title)}
        >
            <div className="col-xs-2 col-md-2 date">
                <img alt="" src={item.image} style={{ width: '180%' }} />
            </div>
            <div className="col-xs-10 col-md-10">
                <h4>
                    <a>{item.title}</a>
                </h4>
                <p>Hiện trong kho có tất cả 90 {item.title}</p>
            </div>
        </div>
    );
}

ProductOptionItem.propTypes = {};

export default ProductOptionItem;
