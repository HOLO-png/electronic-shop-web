import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge, Button } from 'antd';
import numberWithCommas from '../../../../utils/numberWithCommas';
import { order_status } from '../../../../assets/fake-data';

const OrderPayProductStyles = styled.div`
    padding: 10px 0px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    .user-order__pay-product-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &__image {
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            img {
                width: 58%;
                border-radius: 50%;
            }
        }
        &__name {
            font-size: 20px;
            font-family: 'M PLUS Rounded 1c';
            text-shadow: 1px 0px 6px #aaaaaa;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .title-product {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
                width: 300px;
            }
        }
        &__date {
            font-size: 13px;
            margin-left: 20px;
            text-shadow: none;
            font-weight: 700;
        }
        &__description {
            font-size: 15px;
            font-family: 'M PLUS Rounded 1c';
            margin: 5px 0;
        }
        &__address-info {
            font-size: 14px;
            font-family: 'M PLUS Rounded 1c';
        }
        &__content {
            width: 60%;
            margin-right: -15px;
        }
        &__price {
            font-size: 20px;
            color: red;
            font-weight: 700;
        }
        &__status {
            font-size: 12px;
            margin-left: 14px;
            font-weight: 600;
            font-family: sans-serif;
            & .Đang.chờ.xử.lý {
                color: #119803;
            }
            & .Đã.hủy.đơn.hàng {
                color: #d00000;
            }
            .Đang.xử.lý {
                color: #e2c801;
            }
            span.title-status {
                margin-right: 5px;
            }
        }
    }
    span.ant-badge.ant-badge-not-a-wrapper {
        position: absolute;
        top: 0;
        right: 25%;
    }
`;
function OrderPayProduct(props) {
    const { order, handleOrderActive, status, photoURL } = props;
    console.log(order);

    return (
        <OrderPayProductStyles>
            <div
                className="user-order__pay-product-item"
                onDoubleClick={() => handleOrderActive(order)}
            >
                <div className="user-order__pay-product-item__image">
                    <Badge count={order.products.length}></Badge>
                    <img alt="" src={photoURL} />
                </div>
                <div className="user-order__pay-product-item__content">
                    <div className="user-order__pay-product-item__title">
                        <div className="user-order__pay-product-item__name">
                            <span className="title-product">
                                Đơn hàng của {order.name_user}
                            </span>
                            <div className="user-order__pay-product-item__date">
                                <span>{order.dateTime}</span>
                            </div>
                        </div>
                        <div className="user-order__pay-product-item__description">
                            <span>
                                Đơn hàng gồm {order.products.length} sản phẩm
                            </span>
                        </div>
                        <div className="user-order__pay-product-item__address-info">
                            <span>
                                Địa chỉ giao hàng: {order.tinh}, {order.quan},{' '}
                                {order.xa}, {order.mota}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="user-order__pay-product-item__price">
                    <span>
                        {numberWithCommas(
                            order.products.reduce((accumulator, item) => {
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
                <div className="user-order__pay-product-item__status">
                    <div className={order.status.title}>
                        <span className="title-status">
                            {order.status.title}
                        </span>
                        <i class={`fad ${order.status.icon}`}></i>
                    </div>
                </div>
            </div>
        </OrderPayProductStyles>
    );
}

OrderPayProduct.propTypes = {};

export default OrderPayProduct;
