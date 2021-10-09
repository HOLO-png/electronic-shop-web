import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Popover, Row, Skeleton } from 'antd';

const contentMoveFee = <div>32.000</div>;

function ProductMove(props) {
    const { loading, address_user_api } = props;
    const contentMoveAddress = (
        <div>
            {address_user_api.map((item) => {
                return (
                    item.mota +
                    '~' +
                    item.xa +
                    '~' +
                    item.quan +
                    '~' +
                    item.tinh
                );
            })}
        </div>
    );
    return (
        <>
            {loading ? (
                <Skeleton.Button
                    active={true}
                    size="large"
                    shape="default"
                    block={false}
                    style={{ width: '100%', marginTop: 10, height: 150 }}
                />
            ) : (
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ borderBottom: '1px solid #cfcfcf' }}
                >
                    <Col className="gutter-row" span={6}>
                        <p className="product-move">Vận Chuyển</p>
                    </Col>
                    <div className="product-info">
                        <Col className="gutter-row" span={18}>
                            <div className="product-move-title">
                                <i
                                    className="fad fa-truck"
                                    style={{ color: '#56b09b' }}
                                ></i>
                                <div className="product-move-name">
                                    <p>Miễn Phí Vận Chuyển</p>
                                    <p>
                                        Miễn Phí Vận Chuyển khi đơn đạt giá trị
                                        tối thiểu
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col
                            className="gutter-row"
                            span={18}
                            style={{ maxWidth: '72%' }}
                        >
                            <div className="product-move-title">
                                <i
                                    className="fal fa-truck"
                                    style={{ color: '#ff6464' }}
                                ></i>
                                <div className="product-move-name">
                                    <div className="product-move-fee">
                                        <p className="product-move-name">
                                            Vận Chuyển Tới
                                        </p>
                                        <Popover
                                            content={contentMoveAddress}
                                            title="Thông tin địa chỉ"
                                            trigger="click"
                                        >
                                            <Button
                                                style={{
                                                    margin: '5px 0px',
                                                }}
                                            >
                                                {address_user_api.length &&
                                                    address_user_api[0].mota +
                                                        ' - ' +
                                                        address_user_api[0].xa}
                                            </Button>
                                        </Popover>
                                    </div>
                                    <div className="product-move-fee">
                                        <p className="product-move-name">
                                            Phí Vận Chuyển
                                        </p>
                                        <Popover
                                            content={contentMoveFee}
                                            title="Phí vận chuyển"
                                            trigger="hover"
                                        >
                                            <Button
                                                style={{
                                                    margin: '5px 0px',
                                                }}
                                            >
                                                đ32.800
                                            </Button>
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            )}
        </>
    );
}

ProductMove.propTypes = {};

export default ProductMove;
