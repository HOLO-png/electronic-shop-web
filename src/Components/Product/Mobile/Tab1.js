import React from 'react';
import PropTypes from 'prop-types';
import { SectionBody } from '../../Section';
import productData from '../../../assets/fake-data/products';
import ProductCart from '../../ProductCart';
import Grid from '../../Grid';
import { Pagination } from 'antd';
import styled from 'styled-components';

function Tab1(props) {
    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    return (
        <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {productData.getProducts(16).map((item, index) => (
                    <ProductCart
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.title}
                        price={+item.price}
                        slug={item.slug}
                    ></ProductCart>
                ))}
            </Grid>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
                style={{ padding: '20px', marginLeft: '30%' }}
            />
        </SectionBody>
    );
}

Tab1.propTypes = {};

export default Tab1;
