import React from 'react';
import PropTypes from 'prop-types';
import { Col, Empty, Row } from 'antd';
import styled from 'styled-components';

const WaitingConfirmItem = styled.div``;

function WaitingConfirm(props) {
    return (
        <WaitingConfirmItem>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginBottom: '20px' }}
            >
                <Col
                    className="gutter-row"
                    span={24}
                    style={{
                        display: 'flex',
                        minHeight: '350px',
                        flexDirection: 'column',
                        height: 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <Empty />
                </Col>
            </Row>
        </WaitingConfirmItem>
    );
}

WaitingConfirm.propTypes = {};

export default WaitingConfirm;
