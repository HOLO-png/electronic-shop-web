import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Col, Empty, Row, Skeleton } from 'antd';
import { Input } from 'antd';
import Product from './Product';
import { handleAmountProduct } from '../../../Store/Reducer/cart';

const { TextArea } = Input;

const ProductsPayStyle = styled.div`
    height: auto;
    background: #fff;
    box-shadow: 0px 0px 10px 1px #e8e8e8;
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
    overflow: hidden;
    .products-pay {
        &__row-title {
            border-bottom: 1px solid #eaeaea;
        }
        &__col {
        }
        &__name {
            font-size: 21px;
        }
        &__unit {
            font-size: 17px;
            color: #a2a2a2;
        }
        &__row-products {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            margin-top: 20px;
        }
        &__name-product {
            font-size: 17px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin: 0;
        }
        &__kind {
            font-size: 15px;
            font-weight: 600;
            color: #a2a2a2;
            margin: 0;
        }
        &__amount {
            margin-left: 25px;
            font-size: 17px;
            margin: 0;
        }
        &__price {
            color: #e67171;
            font-size: 17px;
            margin: 0;
        }
        &__unit-price {
            font-size: 17px;
            margin: 0;
        }
    }
    .flex-end {
        display: flex;
        justify-content: flex-end;
    }
    button.ant-btn.ant-btn-link {
        font-size: 17px;
    }
    img {
        width: 100%;
    }
    .contact-shop {
        border-top: 1px dashed #c5c5c5;
        &__message {
            font-size: 18px;
            color: #5ebcec;
        }
        &__message-price {
            display: flex;
            justify-content: space-between;
        }
        &__price {
            font-size: 17px;
        }
        &__content {
            font-size: 15px;
            color: #919191;
        }
    }
    .ant-empty {
        margin: 32px 30px;
    }
    .cart-seklentor {
        width: '100%';
    }
`;
function ProductsPay(props) {
    const { products_api, loading, handleChangeMessage } = props;

    const renderProductApi = products_api.map((product, index) =>
        loading ? (
            <Skeleton.Button
                active={true}
                size="large"
                shape="default"
                block={false}
                style={{
                    width: 1200,
                    display: 'flex',
                    alignItems: 'center',
                    height: '100px',
                    marginTop: 20,
                }}
                className="cart-seklentor"
                key={index}
            />
        ) : (
            <Product key={product.id} product={product} />
        ),
    );
    return (
        <ProductsPayStyle>
            <div className="products-pay">
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    className="products-pay__row-title"
                >
                    <Col className="gutter-row products-pay__col" span={13}>
                        <p className="products-pay__name">S???n ph???m</p>
                    </Col>
                    <Col className="gutter-row products-pay__col" span={3}>
                        <p className="products-pay__unit">????n Gi??</p>
                    </Col>
                    <Col className="gutter-row products-pay__col" span={3}>
                        <p className="products-pay__unit">S??? L?????ng</p>
                    </Col>
                    <Col
                        className="gutter-row products-pay__col flex-end"
                        span={5}
                    >
                        <p className="products-pay__unit">Th??nh Ti???n</p>
                    </Col>
                </Row>
                {renderProductApi.length ? renderProductApi : <Empty />}
            </div>
            <div className="contact-shop">
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    className="contact-shop__row-products"
                >
                    {loading ? (
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="default"
                            block={false}
                            style={{
                                width: '550px',
                                display: 'flex',
                                alignItems: 'center',
                                height: '150px',
                                marginTop: 20,
                                marginLeft: 30,
                            }}
                            className="cart-seklentor"
                        />
                    ) : (
                        <Col className="gutter-row contact-shop__col" span={10}>
                            <div className="contact-shop__message">
                                L???i Nh???n
                            </div>
                            <TextArea
                                rows={4}
                                placeholder="H??y ????? l???i l???i nh???n cho ng?????i b??n..."
                                onChange={handleChangeMessage}
                            />
                        </Col>
                    )}
                    {loading ? (
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="default"
                            block={false}
                            style={{
                                width: '550px',
                                display: 'flex',
                                alignItems: 'center',
                                height: '150px',
                                marginTop: 20,
                                marginLeft: 60,
                            }}
                            className="cart-seklentor"
                        />
                    ) : (
                        <Col className="gutter-row contact-shop__col" span={14}>
                            <div className="contact-shop__message-price">
                                <div className="contact-shop__message">
                                    ????n V??? V???n Chuy???n
                                </div>
                                <div className="contact-shop__price">
                                    ???32.700
                                </div>
                            </div>
                            <div className="contact-shop__content">
                                Nhanh
                                <p className="contact-shop__info-ship">
                                    Nh???n h??ng v??o 10 Th09 - 14 Th09 (Ng?????i b??n ???
                                    trong khu v???c gi??n c??ch, th???i gian giao h??ng
                                    s??? ch???m h??n d??? ki???n.)
                                </p>
                            </div>
                            <Button type="link" disabled>
                                Thay ?????i
                            </Button>
                        </Col>
                    )}
                </Row>
            </div>
        </ProductsPayStyle>
    );
}

ProductsPay.propTypes = {};

export default ProductsPay;
