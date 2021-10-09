/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Dropdown, Tooltip } from 'antd';
import { menu } from '../../MenuCart';
import { DownOutlined } from '@ant-design/icons';
import ProductCartCategoryProduct from './ProductCartCategoryProduct';

function QuerationProduct(props) {
    const {
        product,
        activeSearchSimilar,
        index,
        handleShowSearchProductActive,
        statusSearchSimilar,
        mobile_api,
        searchSimilarProducts,
    } = props;

    const handleTextInfoAllSelect = () => {
        const text1 = (
            <span>
                Tìm Sản Phẩm Tương Tự <i className="fad fa-search-plus"></i>
            </span>
        );
        return text1;
    };

    return (
        <Col className="gutter-row" span={3}>
            <Dropdown
                overlay={menu([
                    {
                        price: product.priceOld,
                        title: 'Giá cũ',
                        unit: 'đ',
                    },
                    {
                        price: product.priceOld - product.price,
                        title: 'Giảm được',
                        unit: 'đ',
                    },
                ])}
                trigger={['click']}
            >
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                    Giảm Giá <DownOutlined />
                    <br />
                </a>
            </Dropdown>
            <Tooltip
                placement="right"
                title={() => handleTextInfoAllSelect()}
                color={'#2db7f5'}
            >
                <div
                    className="btn-show-search-product-similar"
                    style={{
                        padding: 5,
                        border:
                            statusSearchSimilar &&
                            activeSearchSimilar === index &&
                            '3px solid #7fc4ec',
                        color:
                            statusSearchSimilar &&
                            activeSearchSimilar === index &&
                            '#969696',
                    }}
                    onClick={() =>
                        handleShowSearchProductActive(index, product)
                    }
                >
                    <a className="ant-dropdown-link">
                        Tìm Sản Phẩm Tương Tự{' '}
                        <i className="fab fa-product-hunt"></i>
                        <br />
                    </a>
                </div>
            </Tooltip>
            {statusSearchSimilar && activeSearchSimilar === index && (
                <ProductCartCategoryProduct
                    mobile_api={mobile_api}
                    searchSimilarProducts={searchSimilarProducts}
                />
            )}
        </Col>
    );
}

QuerationProduct.propTypes = {};

export default QuerationProduct;
