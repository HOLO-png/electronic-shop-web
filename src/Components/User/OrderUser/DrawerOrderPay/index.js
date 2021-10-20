import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Drawer, Row, Space, List, Avatar, Image } from 'antd';
import OrderUserProfile from './OrderUserProfile';
import OrderProducts from './OrderProducts';
import numberWithCommas from '../../../../utils/numberWithCommas';

function DrawerOrderPay(props) {
    const {
        visible,
        placement,
        showDrawer,
        onChange,
        onClose,
        dataOrder,
        photoURL,
    } = props;

    return (
        <Drawer
            title="Xem chi tiết sản phẩm"
            placement={placement}
            width={500}
            onClose={onClose}
            visible={visible}
            extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={onClose}>
                        OK
                    </Button>
                </Space>
            }
        >
            <OrderUserProfile photoURL={photoURL} dataOrder={dataOrder} />
            <hr />
            <OrderProducts dataOrder={dataOrder} />
            <div className="order__total-money">
                <span className="order__total-money-title">Tổng Tiền:</span>
                <span className="order__total-money-text">
                    {numberWithCommas(
                        dataOrder &&
                            dataOrder.products.reduce((accumulator, item) => {
                                return accumulator + item.price * item.amount;
                            }, 0),
                    )}
                    <sup
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        đ
                    </sup>
                </span>
            </div>
        </Drawer>
    );
}

DrawerOrderPay.propTypes = {};

export default DrawerOrderPay;
