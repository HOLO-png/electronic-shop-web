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
import { useHistory, useParams } from 'react-router';
import {
    cartProductsSelector,
    deleteCartProductAllApi,
    getCartProduct,
} from '../../Store/Reducer/cart';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Payment from '../../Components/Pay/Payment/Payment';
import Helmet from '../../Components/Helmet';
import { message } from 'antd';
import {
    addressActiveApiSelector,
    changeAddressActiveApi,
    getAddressActiveApi,
} from '../../Store/Reducer/addressActiveApi';
import PayMethod from '../../Components/Pay/PayMethod';
import Paypal from '../../Components/Pay/Paypal';
import { insertPayProduct } from '../../Store/Reducer/product_pay';
import { openNotification } from '../../utils/messageAlear';
import moment from 'moment';

const PayComponent = styled.div``;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;

const messageToCart = (status, text) => {
    if (status) {
        message.success({
            content: text,
            className: 'custom-class',
            style: {
                marginTop: '0vh',
            },
        });
    } else {
        message.error({
            content: text,
            className: 'custom-class',
            style: {
                marginTop: '0vh',
            },
        });
    }
};

function Pay(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const address_api = useSelector(addressApiSelector);
    const address_user_api = useSelector(addressActiveApiSelector);
    const cartProduct = useSelector(cartProductsSelector);
    const { linkText } = useParams();
    const [sumProduct, setSumProduct] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
    const [valueAddress, setvalueAddress] = useState();
    const [objAddress, setObjAddress] = useState({
        tinh: '',
        quan: '',
        xa: '',
        mota: '',
    });
    const [inputName, setInputName] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [changeCheckbox, setChangeCheckbox] = useState(false);
    const [payMethod, setPayMethod] = useState('');
    const [isShowTablePay, setIsShowTablePay] = useState(false);
    const [showPayPal, setShowPayPal] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(getAddressApi());
        dispatch(getAddressActiveApi());
        dispatch(getCartProduct());
    }, [dispatch]);

    useEffect(() => {
        setObjAddress(address_user_api.obj);
        setvalueAddress(address_user_api.obj);

        address_user_api.obj &&
            setInputName(address_user_api.obj.name_user || '');
        address_user_api.obj &&
            setInputNumber(address_user_api.obj.number_phone || '');
    }, [address_user_api]);

    useEffect(() => {
        setLoading(true);
        const timeLoading = setTimeout(() => {
            if (cartProduct.length) {
                setLoading(false);
            }
        }, 500);
        document.body.style.overflow = '';
        return () => {
            clearTimeout(timeLoading);
        };
    }, [cartProduct]);

    useEffect(() => {
        const sumValues = products.reduce(
            (total, product) => total + product.price * product.amount,
            0,
        );
        setSumProduct(sumValues);
    }, [products]);

    useEffect(() => {
        let arrText = linkText.split('=');
        const payProducts = [];
        arrText.forEach((element1) => {
            if (element1) {
                cartProduct.forEach((element2) => {
                    element1 === element2.id && payProducts.push(element2);
                });
            }
        });
        setProducts(payProducts);
    }, [dispatch, linkText]);

    // DeliveryAddress
    const ImportApiAddressNew = (obj) => {
        dispatch(changeAddressActiveApi(obj));
    };

    const showModal = () => {
        setVisible(true);
    };

    const handleChangeInputName = (e) => {
        setInputName(e.target.value);
    };

    const handleChangeInputNumber = (e) => {
        setInputNumber(e.target.value);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);

            let o = Object.fromEntries(
                Object.entries({
                    tinh: objAddress.tinh || valueAddress.tinh,
                    quan: objAddress.quan || valueAddress.quan,
                    xa: objAddress.xa || valueAddress.xa,
                    mota: objAddress.mota || valueAddress.mota,
                    name_user: inputName,
                    number_phone: inputNumber,
                }).filter(([_, v]) => v !== ''),
            );

            const isEmpty = Object.values(o).every(
                (x) => x === null || x === '',
            );

            if (isEmpty) {
                messageToCart(false, 'Lỗi Khi Tải Dữ Liệu Lên!');
            } else {
                if (changeCheckbox) {
                    ImportApiAddressNew(o);
                    messageToCart(true, 'Đã Tải Thành Công Địa Chỉ Mặc Định');
                } else {
                    setvalueAddress({ ...objAddress, ...o });
                    messageToCart(true, 'Đã Tải Thành Công Địa Chỉ Tạm Thời');
                }
            }
        }, 1000);
    };

    const onHandleValueImportAddress = (obj) => {
        setObjAddress(obj);
    };

    const handleCancel = () => {
        setVisible(false);
        setInputName(address_user_api.obj.name_user || '');
        setInputNumber(address_user_api.obj.number_phone || '');
    };

    function onChangeCheckbox(e) {
        setChangeCheckbox(e.target.checked);
    }

    const handleChangeMethodPayProduct = (method) => {
        setPayMethod(method);
    };

    const handleMethodPayProduct = () => {
        if (payMethod) {
            const obj = {
                ...valueAddress,
                products,
                status: {
                    title: 'Đang chờ xử lý',
                    icon: 'fa-badge-check',
                },
                message: message,
                dateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            };
            delete obj.id;

            dispatch(insertPayProduct(obj));

            setTimeout(() => {
                openNotification(
                    'Xin Chúc Mừng',
                    `Bạn Đã Đặt ${products.length} sản phẩm thành Công`,
                );
                history.push('/user/all');
            }, 500);

            products.forEach((element) => {
                setTimeout(async () => {
                    await dispatch(deleteCartProductAllApi(element));
                }, 100);
            });
        } else {
            messageToCart(
                false,
                'Xin Lỗi, Vui Lòng Chọn Phương Thức Thanh Toán Trước Khi Đặt Hàng!',
            );
        }
    };

    const handleShowPayTable = (method) => {
        if (method === 'Thanh Toán Online') {
            setIsShowTablePay(!isShowTablePay);
        } else {
            setIsShowTablePay(false);
            setShowPayPal(false);
        }
    };

    const handleIntegrate = (key) => {
        if (key === 'PayPal') {
            // setIsShowTablePay(false);
            setShowPayPal(true);
        }
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
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
                    loading={loading}
                    visible={visible}
                    confirmLoading={confirmLoading}
                    valueAddress={valueAddress}
                    showModal={showModal}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    modalText={modalText}
                    onHandleValueImportAddress={onHandleValueImportAddress}
                    objAddress={objAddress}
                    inputName={inputName}
                    inputNumber={inputNumber}
                    handleChangeInputName={handleChangeInputName}
                    handleChangeInputNumber={handleChangeInputNumber}
                    onChangeCheckbox={onChangeCheckbox}
                />
                <ProductsPay
                    products_api={products}
                    loading={loading}
                    handleChangeMessage={handleChangeMessage}
                />
                <Voucher loading={loading} />
                <Payment
                    sumProduct={sumProduct}
                    loading={loading}
                    handleMethodPayProduct={handleMethodPayProduct}
                    handleChangeMethodPayProduct={handleChangeMethodPayProduct}
                    handleShowPayTable={handleShowPayTable}
                />
                <PayMethod
                    isShowTablePay={isShowTablePay}
                    handleIntegrate={handleIntegrate}
                    showPayPal={showPayPal}
                />
            </PayComponent>
        </Helmet>
    );
}

Pay.propTypes = {};

export default Pay;
