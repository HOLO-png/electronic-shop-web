import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { content_pay_btn } from '../../../assets/fake-data';

function MethodPay(props) {
    const [activeBtn, setActiveBtn] = useState(0);

    const handleBtnCheckPay = (i) => {
        setActiveBtn(i);
    };
    const handleRenderUiBtnPay = content_pay_btn.map((item, index) => (
        <Col className="gutter-row products-pay__col" span={4} key={index}>
            <Button
                size="large"
                style={{
                    width: index === 3 ? 227 : 200,
                    background: activeBtn === index && 'rgb(0 100 172)',
                    color: activeBtn === index && '#fff',
                }}
                className="btn-active"
                disabled={index === 1 ? true : false}
                onClick={() => handleBtnCheckPay(index)}
            >
                {item}
            </Button>
        </Col>
    ));
    return (
        <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="payment__row-method"
        >
            <Col className="gutter-row" span={5}>
                <p className="payment__name">Phương thức thanh toán</p>
            </Col>
            {handleRenderUiBtnPay}
        </Row>
    );
}

MethodPay.propTypes = {};

export default MethodPay;
