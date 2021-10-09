import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'antd';

function InputInfo(props) {
    const { handleImportImput } = props;
    const [inputName, setInputName] = useState('');
    const [inputNumber, setInputNumber] = useState(0);

    const handleChangeInputName = (e) => {
        setInputName(e.target.value);
        handleImportImput(inputName, inputNumber);
    };

    const handleChangeInputNumber = (e) => {
        setInputNumber(e.target.value);
        handleImportImput(inputName, inputNumber);
    };

    return (
        <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="delivery-address__row"
            style={{ marginBottom: 20 }}
        >
            <Col className="gutter-row delivery-address__col--des" span={12}>
                <Input
                    placeholder="Nhập Họ Và Tên"
                    style={{ height: 40 }}
                    onChange={handleChangeInputName}
                />
            </Col>
            <Col className="gutter-row delivery-address__col--des" span={12}>
                <Input
                    placeholder="Số Điện Thoại"
                    style={{ height: 40 }}
                    onChange={handleChangeInputNumber}
                />
            </Col>
        </Row>
    );
}

InputInfo.propTypes = {};

export default InputInfo;
