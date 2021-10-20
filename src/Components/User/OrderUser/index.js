import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Radio } from 'antd';
import AllProduct from './AllProduct';
import WaitingConfirm from './WaitingConfirm';
import WaitFor from './WaitFor';
import Delivering from './Delivering';
import Delivered from './Delivered';
import Canceled from './Canceled';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPayProduct,
    payProductsSelector,
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
        margin-left: 20px;
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
    const [status, setStatus] = useState('Đang xử lý');
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [dataOrder, setDataOrder] = useState();
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
                    <TabPane tab="Tất cả" key="1">
                        <AllProduct
                            orders={orders}
                            loading={loading}
                            handleOrderActive={handleOrderActive}
                            status={status}
                            photoURL={photoURL}
                        />
                    </TabPane>
                    <TabPane tab="Chờ xác nhận" key="2">
                        <WaitingConfirm />
                    </TabPane>
                    <TabPane tab="Chờ lấy hàng" key="3">
                        <WaitFor />
                    </TabPane>
                    <TabPane tab="Đang giao" key="4">
                        <Delivering />
                    </TabPane>
                    <TabPane tab="Đã giao" key="5">
                        <Delivered />
                    </TabPane>
                    <TabPane tab="Đã huỷ" key="6">
                        <Canceled />
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
