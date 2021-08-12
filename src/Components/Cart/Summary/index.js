import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Affix, Alert, Button, Col, Row, Checkbox } from 'antd';
import styled from 'styled-components';

const SummaryStyled = styled.div`
    margin-top: 10px;
    background: #fff;
    padding: 10px 0;
    border: 1px solid #dbdbdb;
    box-shadow: 0px 0px 5px 1px #89898942;
    span {
        font-size: 17px;
    }
    .ant-row {
        margin: inherit !important;
    }
    .ant-col {
        margin: 0;
    }
    .ant-col.ant-col-12.gutter-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .summary-voucher {
        display: flex;
        align-items: baseline;
    }
    p {
        margin: 0 10px;
    }
    .summary-check-title {
        display: flex;
        margin: 0 10px;
        align-items: baseline;
    }
    .summary-coin {
        display: flex;
        margin: 0 10px;
        align-items: baseline;
    }
    button {
        width: 100%;
    }
    i {
        font-size: 20px;
    }
    p.summary-coin-value {
        font-size: 33px;
        color: red;
    }
`;
function Summary(props) {
    const [bottom, setBottom] = useState(10);

    return (
        <Affix offsetBottom={bottom}>
            <SummaryStyled>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}></Col>
                    <Col className="gutter-row" span={12}>
                        <div className="summary-voucher">
                            <i
                                class="fad fa-hand-holding-usd"
                                style={{ color: 'red' }}
                            ></i>
                            <p className="summary-voucher-name">
                                Shopee Voucher
                            </p>
                        </div>
                        <div className="summary-btn">
                            <Button>Chọn Hoặc Nhập Mã</Button>
                        </div>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}></Col>
                    <Col className="gutter-row" span={12}>
                        <Checkbox
                            // indeterminate={indeterminate}
                            // onChange={onCheckAllChange}
                            // checked={checkAll}
                            disabled
                        >
                            Shopee Xu
                        </Checkbox>
                        <div className="summary-coin">
                            <i
                                class="fad fa-usd-circle"
                                style={{ color: '#c7c700' }}
                            ></i>
                            <p className="summary-voucher-name">
                                Shopee Voucher
                            </p>
                        </div>
                        <div className="summary-check-title">
                            <i
                                class="fad fa-question-circle"
                                style={{ color: '#0000b8' }}
                            ></i>
                            <p className="summary-voucher-name">
                                Bạn chưa có Shopee Xu
                            </p>
                        </div>
                        <div className="summary-check-title">
                            <p> -đ0</p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={4}>
                        <Checkbox
                        // indeterminate={indeterminate}
                        // onChange={onCheckAllChange}
                        // checked={checkAll}
                        >
                            Chọn Tất Cả (5)
                        </Checkbox>
                    </Col>
                    <Col className="gutter-row" span={1}>
                        <Button type="text">Xoá</Button>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <Button type="text">Bỏ Sản Phẩm Không Hoạt động</Button>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Button type="text">Lưu Vào Mục Đã Thêm</Button>
                    </Col>
                    <Col
                        className="gutter-row"
                        span={6}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        Tổng thanh toán (0 Sản phẩm):
                        <p className="summary-coin-value">₫0</p>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Button type="danger" size="large">
                            Mua Hàng
                        </Button>
                    </Col>
                </Row>
            </SummaryStyled>
        </Affix>
    );
}

Summary.propTypes = {};

export default Summary;
