import React from 'react';
import { Col, Row } from 'antd';
import numberWithCommas from '../../../utils/numberWithCommas';

function Product(props) {
    const { product } = props;

    return (
        <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="products-pay__row-products"
        >
            <Col className="gutter-row products-pay__col" span={2}>
                <p className="products-pay__image-product">
                    <img src={product.image[0]} alt="" />
                </p>
            </Col>
            <Col className="gutter-row products-pay__col" span={8}>
                <p className="products-pay__name-product">{product.name}</p>
            </Col>
            <Col className="gutter-row products-pay__col" span={3}>
                <p className="products-pay__kind">Loại: {product.capacity}</p>
            </Col>
            <Col className="gutter-row products-pay__col" span={3}>
                <p className="products-pay__unit-price">
                    ₫{numberWithCommas(product.price)}
                </p>
            </Col>
            <Col className="gutter-row products-pay__col" span={3}>
                <p className="products-pay__amount">{product.amount}</p>
            </Col>
            <Col className="gutter-row products-pay__col flex-end" span={5}>
                <p className="products-pay__price">
                    ₫{numberWithCommas(product.price * product.amount)}
                </p>
            </Col>
        </Row>
    );
}

Product.propTypes = {};

export default Product;
