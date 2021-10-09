import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Skeleton } from 'antd';
import Slider from 'react-slick';
import ProductCart from '../../../../ProductCart';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMobilesApi,
    mobilesSelector,
} from '../../../../../Store/Reducer/mobile_api';
import styled from 'styled-components';
import { ARR_SEARCH_SIMILAR } from '../../../../../assets/fake-data';

const SliderProductSimilar = styled.div`
    position: absolute;
    left: -1036px;
    width: 1190px;
    height: 330px;
    background: #fff;
    z-index: 1;
    border: 3px solid #7fc4ec;
    .ant-dropdown.ant-dropdown-placement-bottomLeft {
        width: 100%;
        padding: 20px 176px;
        position: absolute;
        transform: translateX(-13px);
    }
    .product-cart {
        &__name {
            font-family: monospace;
        }
        margin-left: -7px;
        width: 104%;
        padding: 10px 10px;
    }
    .menu-content-slider {
        transform: translateY(-21px);
    }
    .product-cart-similar {
        transform: scale(0.85);
    }
    button.slick-arrow.slick-prev {
        background: #3333331f;
        position: absolute;
        left: 0%;
        width: 3%;
        height: 100px;
        z-index: 1;
    }
    button.slick-arrow.slick-next {
        background: #3333331f;
        position: absolute;
        right: 0%;
        width: 3%;
        height: 100px;
        z-index: 1;
    }
    .product-similar-seklentor {
        width: 90% !important;
        height: 290px !important;
        margin-bottom: 20px;
        transform: translateY(17px);
    }
`;

function ProductCartCategoryProduct(props) {
    const { searchSimilarProducts } = props;
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(1190);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <SliderProductSimilar>
            <div className="menu-content-slider" style={{ height: '100%' }}>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ padding: 0 }}
                >
                    <div
                        style={{
                            width: width,
                            display: display ? 'block' : 'none',
                        }}
                        className="slider-show-product-similar"
                    >
                        <Slider {...settings}>
                            {searchSimilarProducts.length
                                ? searchSimilarProducts.map((item, index) => (
                                      <div className="product-cart-similar">
                                          <ProductCart
                                              key={index}
                                              id={item.id}
                                              name={item.name}
                                              price={item.price}
                                              status={false}
                                              star={item.star}
                                              amount={item.amount}
                                              category={item.category}
                                              capacity={item.capacity}
                                              varation={item.varation}
                                              image={item.image}
                                              description={item.description}
                                              priceOld={item.priceOld}
                                              height="350"
                                              img_width="90%"
                                              right="5px"
                                          ></ProductCart>
                                      </div>
                                  ))
                                : ARR_SEARCH_SIMILAR.map((item) => (
                                      <Skeleton.Button
                                          active={true}
                                          size="large"
                                          shape="default"
                                          block={false}
                                          style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              marginTop: 20,
                                          }}
                                          // key={index}
                                          className="product-similar-seklentor"
                                      />
                                  ))}
                        </Slider>
                    </div>
                </Row>
            </div>
        </SliderProductSimilar>
    );
}

ProductCartCategoryProduct.propTypes = {};

export default ProductCartCategoryProduct;
