/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Col, Dropdown, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { menu } from '../../MenuCart';

function ImageNameCapacityProduct(props) {
    const { onChange, product } = props;
    return (
        <Col className="gutter-row" span={11}>
            <Checkbox
                onChange={onChange}
                checked={product?.isChecked || false}
                name={product.id}
                className="input-product-checkbox"
                // style={{ top: -30, transform: 'scale(1.5)' }}
            >
                <Image width={100} src={product.image[0]} />
                <div className="cart-product">
                    <p className="cart-title">{product.name}</p>
                </div>
                <Dropdown
                    overlay={menu([{ price: product.capacity, title: '' }])}
                    trigger={['click']}
                >
                    <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                    >
                        Phân Loại Hàng <DownOutlined />
                        <br /> {product.capacity}
                    </a>
                </Dropdown>
            </Checkbox>
        </Col>
    );
}

ImageNameCapacityProduct.propTypes = {};

export default ImageNameCapacityProduct;
