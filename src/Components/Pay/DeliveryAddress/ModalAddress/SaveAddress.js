import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function SaveAddress(props) {
    const { active } = props;
    return (
        <div
            className="save-address"
            style={{ display: active !== 3 ? 'none' : 'block' }}
        >
            <Button type="dashed" size="large">
                Sửa Lại Địa Chỉ Người Dùng
            </Button>
        </div>
    );
}

SaveAddress.propTypes = {};

export default SaveAddress;
