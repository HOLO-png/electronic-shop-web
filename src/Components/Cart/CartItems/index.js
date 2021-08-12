import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Alert, Col, Row, Checkbox, Tag, Image, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { menu } from '../MenuCart';
const CheckboxGroup = Checkbox.Group;

const CartItem = styled.div`
    margin: 10px 0;
    background: #fafafa;
    padding: 10px;
    border: 1px solid #dbdbdb;
`;
const plainOptions = ['Apple'];
const defaultCheckedList = ['Apple', 'Orange'];

function CartItems(props) {
    const [amount, setAmount] = useState(1);
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onHandleValueNum = () => (amount < 0 ? setAmount(0) : amount);
    return (
        <CartItem>
            <div
                className="cart-header"
                style={{ borderBottom: '1px solid #dbdbdb' }}
            >
                <Checkbox
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                >
                    <Tag color="#f50">Mall</Tag>
                    <p className="cart-mesage">Innisfree Official Store</p>
                    <i class="fas fa-envelope-open"></i>
                </Checkbox>
            </div>
            <div
                className="cart-content"
                style={{ borderBottom: '1px solid #dbdbdb' }}
            >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                        <Checkbox
                            options={plainOptions}
                            value={checkedList}
                            onChange={onChange}
                        >
                            <Image
                                width={100}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <div className="cart-product">
                                <p className="cart-title">
                                    [Mã FMCGMALL giảm 8% Tối đa 80K đơn 250K]
                                    Mặt nạ giấy dưỡng da Hàn Quốc innisfree My
                                    Real Squeeze Mask 20ml
                                </p>
                            </div>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Phân Loại Hàng <DownOutlined />
                                    <br /> Aloe - Nha đam
                                </a>
                            </Dropdown>
                        </Checkbox>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <p style={{ color: '#a0a0a0' }}>đ 200.000</p>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div class="buttons_added">
                            <input
                                class="minus is-form"
                                type="button"
                                value="-"
                                onClick={() => setAmount(amount - 1)}
                            />
                            <input
                                aria-label="quantity"
                                class="input-qty"
                                max="Số tối đa"
                                min="Số tối thiểu"
                                name=""
                                type="number"
                                value={onHandleValueNum()}
                            />
                            <input
                                class="plus is-form"
                                type="button"
                                value="+"
                                onClick={() => setAmount(amount + 1)}
                            />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Tag color="red" style={{ fontSize: '17px' }}>
                            đ 200.000
                        </Tag>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a
                                className="ant-dropdown-link"
                                onClick={(e) => e.preventDefault()}
                            >
                                Phân Loại Hàng <DownOutlined />
                                <br /> Aloe - Nha đam
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
            <div className="cart-footer">
                <i class="fad fa-truck" style={{ color: '#19acac' }}></i>
                <p
                    className="cart-footer-title"
                    style={{ margin: '0 10px', color: '#a0a0a0' }}
                >
                    Miễn Phí Vận Chuyển cho đơn hàng từ ₫0 (giảm tối đa ₫25.000)
                </p>
                <Button type="text">Tìm hiểu thêm</Button>
            </div>
        </CartItem>
    );
}

CartItems.propTypes = {};

export default CartItems;
