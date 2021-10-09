import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card, Col, Row, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckCircleOutlined } from '@ant-design/icons';

function ProductSelect(props) {
    const [active, setActive] = useState(0);
    const { product, handleImportProduct, productObj, loading } = props;

    useEffect(() => {
        Object.keys(productObj).length !== 0
            ? setActive(productObj.count)
            : setActive(0);
        return () => {
            setActive(0);
        };
    }, [productObj]);

    const handleImportImgProduct = (count) => {
        setActive(count);
        if (product.image) {
            handleImportProduct({
                count: count,
                name: product.name,
                image: product.image[count],
                price: product.price[count],
                priceOld: product.priceOld[count],
                capacity: product.capacity[count],
            });
        }
    };

    return (
        <>
            {loading ? (
                <Skeleton.Button
                    active={true}
                    size="large"
                    shape="default"
                    block={false}
                    style={{
                        height: '110px',
                        width: '400px',
                        marginTop: 10,
                    }}
                />
            ) : (
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <p className="product-move">Varation</p>
                    </Col>
                    <Col
                        className="gutter-row select-product"
                        span={18}
                        style={{ marginLeft: '35px' }}
                    >
                        {product.varation
                            ? product.varation.map((item, i) => {
                                  return (
                                      <Card
                                          key={i}
                                          hoverable
                                          style={{
                                              width: 156,
                                              margin: '10px 10px',
                                          }}
                                          cover={
                                              <img
                                                  alt="example"
                                                  src={item.image}
                                              />
                                          }
                                          onClick={() =>
                                              handleImportImgProduct(item.count)
                                          }
                                          className={
                                              item.count === active
                                                  ? 'active'
                                                  : ''
                                          }
                                      >
                                          <Badge
                                              count={
                                                  item.count === active ? (
                                                      <CheckCircleOutlined
                                                          style={{
                                                              color: 'blue',
                                                          }}
                                                      />
                                                  ) : (
                                                      0
                                                  )
                                              }
                                          />
                                          <Meta
                                              title={item.title}
                                              description={
                                                  product.capacity[item.count]
                                              }
                                          />
                                      </Card>
                                  );
                              })
                            : ''}
                    </Col>
                </Row>
            )}{' '}
        </>
    );
}

ProductSelect.propTypes = {};

export default ProductSelect;
