import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Descriptions, Divider } from 'antd';

function DescriptionProduct(props) {
    const [display, setDisplay] = useState(false);
    const { product } = props;

    const handleShowDescriptionProduct = () => {
        setDisplay(!display);
    };

    console.log(display);

    return (
        <>
            <Descriptions
                title="CHI TIẾT SẢN PHẨM"
                bordered
                column={{
                    xxl: 4,
                    xl: 3,
                    lg: 3,
                    md: 3,
                    sm: 2,
                    xs: 1,
                }}
            >
                <Descriptions.Item label="Danh Mục">
                    {product ? product.category : ''}
                </Descriptions.Item>
                <Descriptions.Item label="Thương Hiệu">
                    {product.description ? product.description.trademark : ''}
                </Descriptions.Item>
                <Descriptions.Item label="Nguồn Gốc Sản Xuất">
                    {product.description
                        ? product.description.origin_trademark
                        : ''}
                </Descriptions.Item>
                <Descriptions.Item label="Kho hàng">
                    {product.amount}
                </Descriptions.Item>
                <Descriptions.Item label="Gửi từ">
                    {product.shop ? product.shop.address : ''}
                </Descriptions.Item>
                <Descriptions.Item label="Bảo Hành">
                    {product.description ? product.description.insurance : ''}
                    Tháng
                </Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    {product.description
                        ? Object.keys(product.description).map((keyName, i) => {
                              if (keyName !== 'details') {
                                  return (
                                      <li
                                          className="travelcompany-input"
                                          key={i}
                                          style={{ listStyleType: 'none' }}
                                      >
                                          <span className="input-label">
                                              {keyName}:{' '}
                                              {product.description[keyName]}
                                          </span>
                                      </li>
                                  );
                              }
                          })
                        : ''}
                </Descriptions.Item>
            </Descriptions>
            <div
                className="product-desc-info"
                style={{
                    marginTop: '50px',
                    height: display ? 'auto' : 230,
                    overflow: 'hidden',
                    transition: '0.5s ease-in-out',
                    position: 'relative',
                }}
            >
                <h1>MÔ TẢ SẢN PHẨM</h1>
                {product.description
                    ? Object.keys(product.description.details).map(
                          (keyName, i) => {
                              return (
                                  <div key={i}>
                                      <Divider orientation="left">
                                          {keyName}
                                      </Divider>
                                      <span className="input-label">
                                          {product.description.details[keyName]}
                                      </span>
                                  </div>
                              );
                          },
                      )
                    : ''}
                <div
                    className="opacity"
                    style={{
                        position: 'absolute',
                        height: 150,
                        width: '100%',
                        top: '44%',
                        background:
                            'linear-gradient(rgb(255 255 255 / 0%), rgb(255, 255, 255)) rgb(255 255 255 / 31%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        visibility: display ? 'hidden' : '',
                    }}
                ></div>
            </div>
            <Button
                type="link"
                onClick={handleShowDescriptionProduct}
                style={{ marginTop: 30, marginLeft: '45%' }}
            >
                {display ? 'Thu Gọn' : 'Xem Thêm'}
            </Button>
        </>
    );
}

DescriptionProduct.propTypes = {};

export default DescriptionProduct;
