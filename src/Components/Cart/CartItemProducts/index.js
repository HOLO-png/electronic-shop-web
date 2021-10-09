import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartItemProduct from '../CartItemProduct';
import { Skeleton } from 'antd';

function CartItemProducts(props) {
    const {
        cartProduct,
        handleAmount,
        handleImportProduct,
        totalProducts,
        loading,
        handleStatusChange,
        handleImportProductToTotal,
        activeSearchSimilar,
        handleShowSearchProductActive,
        statusSearchSimilar,
        mobile_api,
        searchSimilarProducts,
    } = props;

    return cartProduct.map((item, index) => {
        return loading ? (
            <Skeleton.Button
                active={true}
                size="large"
                shape="default"
                block={false}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    marginTop: 20,
                }}
                key={index}
                className="cart-seklentor"
            />
        ) : (
            <CartItemProduct
                key={index}
                cartProduct={cartProduct}
                product={item}
                handleAmount={handleAmount}
                handleImportProduct={handleImportProduct}
                totalProducts={totalProducts}
                activeSearchSimilar={activeSearchSimilar}
                index={index}
                handleShowSearchProductActive={handleShowSearchProductActive}
                statusSearchSimilar={statusSearchSimilar}
                handleStatusChange={handleStatusChange}
                handleImportProductToTotal={handleImportProductToTotal}
                mobile_api={mobile_api}
                searchSimilarProducts={searchSimilarProducts}
            />
        );
    });
}

CartItemProducts.propTypes = {};

export default CartItemProducts;
