import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

function Paginations(props) {
    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    return (
        <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            style={{ padding: '20px', marginLeft: '30%' }}
        />
    );
}

Paginations.propTypes = {};

export default Paginations;
