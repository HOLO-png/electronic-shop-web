import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import numberWithCommas from '../../../../utils/numberWithCommas';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getProducts } from '../../../../utils/randomProduct';

const ProductsTopItem = styled.div`
    .ant-card-cover {
        width: 180px;
        display: flex;
        justify-content: center;
        transform: translateX(30px);
        padding: 10px;
        img {
            width: 100%;
        }
    }
`;

function ProductsTop(props) {
    const { mobileProductTop } = props;

    const name_url = (name) => name.replace(/ /g, '-');

    const renderProductsTop = () =>
        mobileProductTop
            ? getProducts(6, mobileProductTop && mobileProductTop).map(
                  (item, i) => (
                      <Link
                          to={`/${item.category}/${name_url(item.name)}/${
                              item.id
                          }`}
                          key={i}
                      >
                          <Card
                              hoverable
                              style={{ width: 247 }}
                              cover={
                                  <img
                                      alt="example"
                                      src={item.varation[0].image}
                                  />
                              }
                          >
                              <Meta
                                  title={item.name}
                                  description={
                                      numberWithCommas(item.price[0]) + ' đ'
                                  }
                              />
                          </Card>
                      </Link>
                  ),
              )
            : '';
    return (
        <ProductsTopItem>
            <div className="product-max-saler">Top Sản Phẩm Bán Chạy</div>
            {renderProductsTop()}
        </ProductsTopItem>
    );
}

ProductsTop.propTypes = {};

export default ProductsTop;
