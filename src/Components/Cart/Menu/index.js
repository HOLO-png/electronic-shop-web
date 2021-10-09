import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';

function Menu(props) {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="header-row">
            <Col className="gutter-row" span={12}>
                <Checkbox
                // indeterminate={indeterminate}
                // onChange={onCheckAllChange}
                // checked={checkAll}
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
    );
}

Menu.propTypes = {};

export default Menu;
