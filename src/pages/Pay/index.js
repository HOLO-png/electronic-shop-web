import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Voucher from '../../Components/Pay/Voucher';
import DeliveryAddress from '../../Components/Pay/DeliveryAddress';
import { useDispatch, useSelector } from 'react-redux';
import {
    addressApiSelector,
    getAddressApi,
} from '../../Store/Reducer/apiAddress';
import ProductsPay from '../../Components/Pay/ProductPay';
import { useParams } from 'react-router';
import { cartProductsSelector, getCartProduct } from '../../Store/Reducer/cart';
import {
    addressUserApiSelector,
    getAddressUserApi,
} from '../../Store/Reducer/addressUserApi';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Payment from '../../Components/Pay/Payment/Payment';
import Helmet from '../../Components/Helmet';
import { message } from 'antd';

const PayComponent = styled.div``;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;
function Pay(props) {
    const dispatch = useDispatch();
    const address_api = useSelector(addressApiSelector);
    const address_user_api = useSelector(addressUserApiSelector);
    const cartProduct = useSelector(cartProductsSelector);
    const { linkText } = useParams();
    const [sumProduct, setSumProduct] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
    const [valueAddress, setvalueAddress] = useState({});
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);

    useEffect(() => {
        dispatch(getAddressApi());
        dispatch(getAddressUserApi());
    }, [dispatch]);

    useEffect(() => {
        setLoading(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (cartProduct.length) {
                setLoading(false);
                document.body.style.overflow = '';
            }
        }, 500);
    }, [cartProduct]);

    const ImportApiAddressNew = (obj) => {
        console.log(obj);
    };

    useEffect(() => {
        const sumValues = products.reduce(
            (total, product) => total + product.price * product.amount,
            0,
        );
        setSumProduct(sumValues);
    }, [products]);

    useEffect(() => {
        dispatch(getCartProduct());
        let arrText = linkText.split('=');
        const products = [];
        arrText.forEach((element1) => {
            cartProduct.forEach((element2) => {
                element1 === element2.id && products.push(element2);
            });
        });
        setProducts(products);
    }, [dispatch, linkText]);

    // DeliveryAddress
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);

            const isEmpty = Object.values(valueAddress).every(
                (x) => x === null || x === '',
            );
            if (isEmpty) {
                messageToCart(false);
            } else {
                ImportApiAddressNew(valueAddress);
                messageToCart(true);
            }
        }, 1000);
    };

    const onHandleValueImportAddress = (obj) => {
        setvalueAddress({ ...obj, name_user: name, number_phone: number });
    };

    const messageToCart = (status) => {
        if (status) {
            message.success({
                content: 'Đã Tải Thành Công Địa Chỉ Tạm Thời',
                className: 'custom-class',
                style: {
                    marginTop: '0vh',
                },
            });
        } else {
            message.error({
                content: 'Lỗi Khi Tải Dữ Liệu Lên!',
                className: 'custom-class',
                style: {
                    marginTop: '0vh',
                },
            });
        }
    };
    const handleImportImput = (name, number) => {
        name && setName(name);
        number && setNumber(number);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    // End
    return (
        <Helmet title="Cart">
            {loading && (
                <div className="loading__container">
                    <ScaleLoader
                        color={'#2963B3'}
                        loading={loading}
                        css={override}
                        size={200}
                    />
                </div>
            )}
            <PayComponent>
                <DeliveryAddress
                    address_api={address_api}
                    ImportApiAddressNew={ImportApiAddressNew}
                    address_user_api={address_user_api}
                    loading={loading}
                    visible={visible}
                    confirmLoading={confirmLoading}
                    valueAddress={valueAddress}
                    showModal={showModal}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    modalText={modalText}
                    onHandleValueImportAddress={onHandleValueImportAddress}
                    handleImportImput={handleImportImput}
                />
                <ProductsPay products_api={products} loading={loading} />
                <Voucher loading={loading} />
                <Payment sumProduct={sumProduct} loading={loading} />
            </PayComponent>
        </Helmet>
    );
}

Pay.propTypes = {};

export default Pay;
