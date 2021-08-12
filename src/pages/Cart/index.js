import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from '../../Components/Helmet';
import { Alert, Col, Row, Checkbox, Affix, Button } from 'antd';
import CartItems from '../../Components/Cart/CartItems';
import Summary from '../../Components/Cart/Summary';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple'];
const defaultCheckedList = ['Apple', 'Orange'];

const CartPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 97%;

    .ant-row {
        max-width: 100%;
        margin: 10px 0;
        align-items: center;
        margin: 10px 0 !important;
    }
    .ant-alert-message {
        color: #9e8506;
    }
    .ant-alert-description {
        font-size: 13px;
        color: #9b9b9b;
    }
    .header-row {
        height: 50px;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #f4f4f4;
        margin: 10px 0;
    }
    .ant-checkbox + span {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            margin: 0 10px;
        }
        i {
            color: red;
        }
    }
    .cart-header {
        height: 50px;
        display: flex;
        align-items: center;
    }
    p.cart-title {
        margin: 0 10px;
        width: 75%;
        padding: 10px;
    }
    .cart-product {
        width: 60%;
    }
    .cart-footer {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
`;
function Cart(props) {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <Helmet title="Cart">
            <CartPage>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24}>
                        <Alert
                            message="Thông báo"
                            description="Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!"
                            type="warning"
                            showIcon
                            closable
                        />
                    </Col>
                </Row>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    className="header-row"
                >
                    <Col className="gutter-row" span={12}>
                        <Checkbox
                            indeterminate={indeterminate}
                            onChange={onCheckAllChange}
                            checked={checkAll}
                        >
                            Sản Phẩm
                        </Checkbox>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        Đơn Giá
                    </Col>
                    <Col className="gutter-row" span={3}>
                        Số Lượng
                    </Col>
                    <Col className="gutter-row" span={3}>
                        Số Tiền
                    </Col>
                    <Col className="gutter-row" span={3}>
                        Thao Tác
                    </Col>
                </Row>
                <CartItems />
                <CartItems />
                <CartItems />
                <CartItems />
                <CartItems />
                <CartItems />
                <Summary />
            </CartPage>
        </Helmet>
    );
}

Cart.propTypes = {};

export default Cart;
