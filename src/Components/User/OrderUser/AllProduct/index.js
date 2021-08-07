import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Col, Divider, Empty, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;
const AllProductItem = styled.div`
    span.ant-divider-inner-text {
        font-size: 13px;
        color: #cbcbcb;
    }
    .all-product__search {
        width: 350px;
        align-self: flex-end;
    }
    .ant-input {
        height: 40px;
        font-size: 17px;
    }
    .ant-btn {
        height: 40px;
    }
    .add-product__processing {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;
function AllProduct(props) {
    const onSearch = (value) => console.log(value);
    return (
        <AllProductItem>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginBottom: '20px' }}
            >
                <Col
                    className="gutter-row"
                    span={24}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        minHeight: '350px',
                        flexDirection: 'column',
                        height: 'auto',
                    }}
                >
                    <div className="all-product__search">
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                        />
                    </div>
                    <Divider
                        orientation="right"
                        style={{ transform: 'translateY(-10px)' }}
                    >
                        All Product
                    </Divider>
                    <div className="add-product__processing">
                        <Empty />
                        <Link to="/home">
                            <Button type="primary">Create Now</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </AllProductItem>
    );
}

AllProduct.propTypes = {};

export default AllProduct;
