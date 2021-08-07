import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Radio } from 'antd';
import AllProduct from './AllProduct';
import WaitingConfirm from './WaitingConfirm';
import WaitFor from './WaitFor';
import Delivering from './Delivering';
import Delivered from './Delivered';
import Canceled from './Canceled';
import styled from 'styled-components';
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
function OrderUser(props) {
    return (
        <OrderUserConFirm>
            <Tabs defaultActiveKey="1" type="card" size={110}>
                <TabPane tab="Tất cả" key="1">
                    <AllProduct />
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
        </OrderUserConFirm>
    );
}

OrderUser.propTypes = {};

export default OrderUser;
