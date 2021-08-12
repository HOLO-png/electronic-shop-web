import React, { useState } from 'react';
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
import { BackTop, Carousel, Col, Divider, Row, Tooltip } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Sidebar from '../../Components/Sidebar';

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
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
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
                <SectionTitle icon="stars">ĐIỆN THOẠI IPHONE</SectionTitle>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                        <Carousel autoplay>
                            <div>
                                <img
                                    alt=""
                                    src="https://media.istockphoto.com/photos/apple-iphone-during-ios-update-picture-id1226728983?k=6&m=1226728983&s=612x612&w=0&h=63OVcdhRoMFDCG0_Ppo_V2zBHdBkgH1ze1NaHkBQ1tg="
                                />
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src="https://media.istockphoto.com/photos/apple-iphone-11-pro-picture-id1195561906?k=6&m=1195561906&s=612x612&w=0&h=BZTnE8YLuGDNOWQ85cLhjz6W1uyVw9fydwl9vORsacY="
                                />
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src="https://media.istockphoto.com/photos/apple-iphone-11-pro-on-a-wooden-surface-apples-new-smartphone-closeup-picture-id1181690502?k=6&m=1181690502&s=612x612&w=0&h=WQUe5Cd3vaDtk_MJ-MdQONsjzcee_wL7nMnC4uNnzAM="
                                />
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src="https://media.istockphoto.com/photos/iphone-11-pro-max-on-a-dark-background-picture-id1183970747?k=6&m=1183970747&s=612x612&w=0&h=MCvFbF-ZfHi15qdGILtBPibRD3cd_gJ37FlaoLdr-Vo="
                                />
                            </div>
                        </Carousel>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <iframe
                            style={{ width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/ikzXR2iV7Zs"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </Col>
                </Row>
                <Divider
                    orientation="center"
                    style={{ transform: 'translateY(30px)', color: '#c3c3c3' }}
                >
                    IPHONE
                </Divider>
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
                <SectionTitle icon="stars"></SectionTitle>
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
            <Sidebar />
        </Helmet>
    );
}
