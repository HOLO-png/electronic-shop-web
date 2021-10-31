/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShopToCart from './ShopToCart';
import CartProductContent from './CartProductContent';
import CartFooter from './CartFooter';

const CartItem = styled.div`
    margin: 10px 0;
    background: #ffffff;
    padding: 10px;
    border: 1px solid #dbdbdb;
`;
function CartItemProduct(props) {
    const {
        product,
        handleAmount,
        statusAll,
        activeSearchSimilar,
        index,
        handleShowSearchProductActive,
        statusSearchSimilar,
        handleStatusChange,
        handleImportProductToTotal,
        mobile_api,
        searchSimilarProducts,
    } = props;
    const [amout, setAmout] = useState(0);

    useEffect(() => {
        setAmout(product.amount);
    }, [product, statusAll]);

    const onChange = (e) => {
        const { name, checked } = e.target;
        handleStatusChange(name, checked);
    };

    useEffect(() => {
        handleImportProductToTotal(product, product.isChecked);
    }, [product]);

    const onHandleValueNum = () => (amout < 1 ? setAmout(1) : amout);

    const handleRemoveNum = () => {
        setAmout(amout - 1);
        handleAmount({ ...product, amount: amout - 1 });
    };

    const handleSumNum = () => {
        setAmout(amout + 1);
        handleAmount({ ...product, amount: amout + 1 });
    };

    // const handleChangeStatusBuy = () => {
    //     if (totalProducts.length) {
    //         for (let i = 0; i < totalProducts.length; i++) {
    //             if (totalProducts[i].image[0] === product.image[0]) {
    //                 return true;
    //             } else {
    //                 return status;
    //             }
    //         }
    //     } else {
    //         return status;
    //     }
    // };

    return (
        <CartItem>
            <ShopToCart onChange={onChange} product={product} />

            <CartProductContent
                onChange={onChange}
                product={product}
                handleRemoveNum={handleRemoveNum}
                onHandleValueNum={onHandleValueNum}
                handleSumNum={handleSumNum}
                amout={amout}
                activeSearchSimilar={activeSearchSimilar}
                handleShowSearchProductActive={handleShowSearchProductActive}
                index={index}
                statusSearchSimilar={statusSearchSimilar}
                mobile_api={mobile_api}
                searchSimilarProducts={searchSimilarProducts}
            />

            <CartFooter />
        </CartItem>
    );
}

CartItemProduct.propTypes = {};

export default CartItemProduct;
