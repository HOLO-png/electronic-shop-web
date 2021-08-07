import React from 'react';
import { Link } from 'react-router-dom';

import heroSlides from '../../assets/fake-data';
import police from '../../assets/fake-data/policeCartApi';

import Helmet from '../../Components/Helmet';
import HeroSlides from '../../Components/HeroSlides.js';
import PoliceCart from '../../Components/PoliceCart';
import Section, { SectionBody, SectionTitle } from '../../Components/Section';
import Grid from '../../Components/Grid';
import productData from '../../assets/fake-data/products';
import ProductCart from '../../Components/ProductCart';
import banner_iphone from '../../assets/images/banner/banner1.jpg';
import Banner from '../../Components/Banner';
import { BackTop, Tooltip } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const text = <span>Cuộn lên đầu trang</span>;

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

export default function Home() {
    return (
        <Helmet title="Home">
            {/* Show heroSlides */}
            <HeroSlides
                data={heroSlides}
                control={true}
                auto={true}
                timeOut={6000}
            />
            {/* end show heroslides */}
            {/* section */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {police.map((item, index) => (
                            <Link to="/policy" key={index}>
                                <PoliceCart
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end section */}

            {/* selling section */}
            <Section>
                <SectionTitle icon="stars">
                    Top selling products of the week
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(4).map((item, index) => (
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
                </SectionBody>
            </Section>
            {/* end selling section */}
            {/* new arrival section */}
            <Section>
                <SectionTitle icon="stars">
                    Top selling products of the week
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
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
                </SectionBody>
            </Section>
            {/* end arrival section */}

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <Banner image={banner_iphone} name="iphone-banner" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}
            <Tooltip
                placement="top"
                title={text}
                style={{ right: '76px', bottom: '100px' }}
                color="#4267b2"
            >
                <BackTop>
                    <div style={style}>
                        <UpOutlined />
                    </div>
                </BackTop>
            </Tooltip>
        </Helmet>
    );
}
