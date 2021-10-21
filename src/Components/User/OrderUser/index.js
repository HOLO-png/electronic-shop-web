import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Radio } from 'antd';
import AllProduct from './AllProduct';
import WaitingConfirm from './WaitingConfirm';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPayProduct,
    payProductsSelector,
    updatePayProduct,
} from '../../../Store/Reducer/product_pay';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Helmet from '../../Helmet';
import { AuthContext } from '../../../Context/AuthProvider';
import DrawerOrderPay from './DrawerOrderPay';
const { TabPane } = Tabs;

const OrderUserConFirm = styled.div`
    .ant-tabs-tab {
        width: 140px;
    }
    .ant-tabs-nav-list {
        transition: 2s width ease;
    }
    .ant-tabs-tab-btn {
        margin-left: 10px;
    }
`;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;
function OrderUser(props) {
    const dispatch = useDispatch();
    const data = React.useContext(AuthContext);

    const productsPay = useSelector(payProductsSelector);
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [dataOrder, setDataOrder] = useState();
    const [productWaitingConfirm, setProductWaitingConfirm] = useState(null);
    const [delivery, setDelivery] = useState(null);
    const [delivered, setDelivered] = useState(null);
    const [cancelOrder, setCancelOrder] = useState(null);

    const { photoURL } = data.user;

    useEffect(() => {
        dispatch(getPayProduct());
    }, [dispatch]);

    useEffect(() => {
        setLoading(true);
        const timeLoading = setTimeout(() => {
            setLoading(false);
            setOrders(productsPay);
        }, 500);
        return () => {
            clearTimeout(timeLoading);
        };
    }, [productsPay]);

    useEffect(() => {
        const orderWaitingConfirm = orders.filter(
            (item) => item.status.title === 'Đang chờ xử lý',
        );
        setProductWaitingConfirm(orderWaitingConfirm);

        const orderDelivery = orders.filter(
            (item) => item.status.title === 'Đang giao hàng',
        );
        setDelivery(orderDelivery);

        const orderDelivered = orders.filter(
            (item) => item.status.title === 'Đã giao hàng',
        );
        setDelivered(orderDelivered);

        const orderCancel = orders.filter(
            (item) => item.status.title === 'Đã hủy đơn hàng',
        );
        setCancelOrder(orderCancel);
    }, [orders]);

    const handleOrderActive = (order) => {
        setDataOrder(order);
        setVisible(true);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setVisible(false);
    };

    function handleChangeDataValue(data) {
        console.log('ok');

        const objData = {
            ...data,
            status: {
                title: 'Đang giao hàng',
                icon: 'fa-check-square',
            },
        };
        dispatch(updatePayProduct(objData));
    }

    return (
        <Helmet title="Payment">
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
            <OrderUserConFirm>
                <Tabs defaultActiveKey="1" type="card" size={110}>
                    <TabPane tab="Tất cả đơn hàng" key="1">
                        <AllProduct
                            orders={orders}
                            loading={loading}
                            handleOrderActive={handleOrderActive}
                            photoURL={photoURL}
                            handleChangeDataValue={handleChangeDataValue}
                        />
                    </TabPane>
                    <TabPane tab="Đang chờ xử lý" key="2">
                        <WaitingConfirm
                            order={productWaitingConfirm}
                            photoURL={photoURL}
                            handleOrderActive={handleOrderActive}
                        />
                    </TabPane>
                    <TabPane tab="Đang giao hàng" key="3">
                        <WaitingConfirm
                            order={delivery}
                            photoURL={photoURL}
                            handleOrderActive={handleOrderActive}
                        />
                    </TabPane>
                    <TabPane tab="Đã giao hàng" key="5">
                        <WaitingConfirm
                            order={delivered}
                            photoURL={photoURL}
                            handleOrderActive={handleOrderActive}
                        />
                    </TabPane>
                    <TabPane tab="Đã huỷ đơn hàng" key="6">
                        <WaitingConfirm
                            order={cancelOrder}
                            photoURL={photoURL}
                            handleOrderActive={handleOrderActive}
                        />
                    </TabPane>
                </Tabs>
                <DrawerOrderPay
                    visible={visible}
                    placement={placement}
                    onChange={onChange}
                    onClose={onClose}
                    dataOrder={dataOrder}
                    photoURL={photoURL}
                />
            </OrderUserConFirm>
        </Helmet>
    );
}

OrderUser.propTypes = {};

export default OrderUser;
