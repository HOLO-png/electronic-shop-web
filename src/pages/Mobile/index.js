import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from '../../Components/Helmet';
import Slider from 'react-slick';
import {
    Col,
    Row,
    List,
    Button,
    Rate,
    InputNumber,
    Checkbox,
    Radio,
    Tabs,
} from 'antd';
import Tab1 from '../../Components/Product/Mobile/Tab1';
const { TabPane } = Tabs;

const data1 = [
    'Điện thoại Smartphone',
    'Điện thoại phổ thông',
    'Điện thoại bàn',
    'Máy đọc sách',
];
const data2 = ['Bạn muốn giao hàng tới đâu?'];
const data3 = ['Giao Siêu Tốc 24h', 'Không Giới Hạn', 'Rẻ Hơn Hoàn Tiền'];
const data4 = [
    { rate: 5, title: 'Từ 5 sao' },
    { rate: 4, title: 'Từ 4 sao' },
    { rate: 3, title: 'Từ 3 sao' },
];
const data5 = [
    'Dưới 500.000',
    'Từ 500.000 đến 5.000.000',
    'Từ 5.000.000 đến 22.500.000',
    'Trên 22.500.000',
];
const data6 = ['128GB', '64GB', '32GB', '256GB'];
const data7 = [
    'OEM',
    'Samsung',
    'Apple',
    'Xiaomi',
    'OPPO',
    'Panasonic',
    'Masstel',
    'Nokia',
    'Huawei',
    'Kindle',
    'Vtel',
];
const data8 = ['Từ 11MP đến 13MP', 'Dưới 8MP', 'Trên 16MP', 'Từ 14MP đến 16MP'];
const data9 = ['Trên 12MP', 'Từ 5MP đến 8MP', 'Từ 8MP đến 12MP', 'Dưới 8MP'];
const data10 = ['Hàng Nội Địa', 'Hàng Quốc Tế'];

const MobileLayout = styled.div`
    .ant-list-bordered {
        border: none;
    }
    .ant-list-bordered.ant-list-sm .ant-list-item {
        padding: 2px 16px;
        cursor: pointer;
        justify-content: flex-start;
    }
    .ant-list-header {
        font-size: 17px;
        color: #a8a8a8;
    }
    .mobile-address,
    .mobile-service {
        margin-top: 15px;
    }
    p {
        margin: -2px 10px;
    }
    .mobile-price-clause {
        margin: 16px;
        p {
            font-size: 15px;
            color: #878787;
        }
        .ant-input-number,
        .ant-btn {
            margin: 10px;
        }
    }
    .mobile-title {
        display: flex;
        margin: 10px 0;
        font-size: 25px;
        color: #b6b6b6;
        font-weight: 300;
        p {
            font-size: 26px;
            margin: 0 10px;
            color: #333;
        }
    }
    button.slick-arrow.slick-prev {
        background: #3333331f;
        position: absolute;
        left: 0%;
        width: 4%;
        height: 162px;
        z-index: 1;
    }
    button.slick-arrow.slick-next {
        background: #3333331f;
        position: absolute;
        right: 0%;
        width: 4%;
        height: 162px;
        z-index: 1;
    }
    .mobile-tabs {
        .ant-tabs.ant-tabs-top {
            margin: 15px 0px;
        }
        .ant-tabs-tab {
            width: 100px;
            justify-content: center;
        }
    }
    .ant-tabs.ant-tabs-top.mobile-tabs {
        margin-top: 20px;
    }
    .mobile-source {
        font-size: 20px;
        color: #d7d7d7;
    }
    .product-cart {
        width: 98%;
        margin-left: 2px;
    }
    span {
        margin-left: 10px;
    }
    ul.ant-rate.ant-rate-disabled {
        font-size: 15px;
    }
`;

function Mobile(props) {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(400);

    function callback(key) {
        console.log(key);
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    function onChangePrice(value) {
        console.log('changed', value);
    }
    return (
        <Helmet title="Mobile">
            <MobileLayout>
                <div className="mobile-source">
                    <p>
                        Home <i class="fal fa-chevron-right"></i> Mobile
                    </p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <List
                            size="small"
                            header={<div>DANH MỤC SẢN PHẨM</div>}
                            bordered
                            dataSource={data1}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                        <List
                            size="small"
                            header={<div>ĐỊA CHỈ NHẬN HÀNG</div>}
                            bordered
                            className="mobile-address"
                            dataSource={data2}
                            renderItem={(item) => (
                                <List.Item>
                                    {item}
                                    <Button type="link">NHẬP ĐỊA CHỈ</Button>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>DỊCH VỤ</div>}
                            bordered
                            className="mobile-service"
                            dataSource={data3}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox onChange={onChange}>
                                        {item}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>ĐÁNH GIÁ</div>}
                            bordered
                            className="mobile-evaluate"
                            dataSource={data4}
                            renderItem={(item) => (
                                <List.Item>
                                    <Rate disabled defaultValue={item.rate} />
                                    <p>{item.title}</p>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>GIÁ</div>}
                            bordered
                            className="mobile-price"
                            dataSource={data5}
                            renderItem={(item) => (
                                <List.Item>
                                    <Button type="dashed">{item}</Button>
                                </List.Item>
                            )}
                        />
                        <div className="mobile-price-clause">
                            <p>Chọn Khoảng Giá</p>
                            <InputNumber
                                defaultValue={0}
                                formatter={(value) =>
                                    `$ ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ',',
                                    )
                                }
                                parser={(value) =>
                                    value.replace(/\$\s?|(,*)/g, '')
                                }
                                onChange={onChangePrice}
                            />
                            ~
                            <InputNumber
                                defaultValue={0}
                                formatter={(value) =>
                                    `$ ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ',',
                                    )
                                }
                                parser={(value) =>
                                    value.replace(/\$\s?|(,*)/g, '')
                                }
                                onChange={onChangePrice}
                            />
                            <Button>Áp Dụng</Button>
                        </div>
                        <List
                            size="small"
                            header={<div>ROM</div>}
                            bordered
                            className="mobile-ROM"
                            dataSource={data6}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox onChange={onChange}>
                                        {item}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>THƯƠNG HIỆU</div>}
                            bordered
                            className="mobile-ROM"
                            dataSource={data7}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox onChange={onChange}>
                                        {item}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>CAMERA SAU</div>}
                            bordered
                            className="mobile-camera1"
                            dataSource={data8}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox onChange={onChange}>
                                        {item}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>CAMERA TRƯỚC</div>}
                            bordered
                            className="mobile-camera2"
                            dataSource={data9}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox onChange={onChange}>
                                        {item}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                        <List
                            size="small"
                            header={<div>GIAO HÀNG</div>}
                            bordered
                            className="mobile-delivery"
                            dataSource={data10}
                            renderItem={(item) => (
                                <List.Item>
                                    <Radio>{item}</Radio>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <div className="mobile-title">
                            Điện Thoại - Máy Tính Bảng: <p>355</p> kết quả
                        </div>
                        <div className="product-slides">
                            <div
                                style={{
                                    width: '100%',
                                    display: display ? 'block' : 'none',
                                }}
                            >
                                <Slider {...settings}>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '100%' }}
                                            src="https://salt.tikicdn.com/cache/w1080/ts/banner/f9/c2/92/1aab9d593a04faf0d403e17203ad59b8.jpg.webp"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '100%' }}
                                            src="https://salt.tikicdn.com/cache/w1080/ts/banner/2f/70/63/37ad074899b91efd9f225786968ccda7.jpg.webp"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '100%' }}
                                            src="https://salt.tikicdn.com/cache/w1080/ts/banner/0f/1f/df/0fbf4177fee0e7faf7346c89bfb8106f.jpg.webp"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '100%' }}
                                            src="https://salt.tikicdn.com/cache/w1080/ts/banner/9b/8b/a0/ff13d673e466f0a53ec335c392feda2e.png.webp"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '100%' }}
                                            src="https://salt.tikicdn.com/cache/w1080/ts/banner/45/33/5c/7fcc628cd0a1add0edb0069627ceefc3.jpg.webp"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            className="mobile-tabs"
                        >
                            <TabPane tab="Phổ Biến" key="1">
                                <Tab1 />
                            </TabPane>
                            <TabPane tab="Bán Chạy" key="2">
                                <Tab1 />
                            </TabPane>
                            <TabPane tab="Hàng Mới" key="3">
                                <Tab1 />
                            </TabPane>
                            <TabPane tab="Giá Thấp" key="4">
                                <Tab1 />
                            </TabPane>
                            <TabPane tab="Giá Cao" key="5">
                                <Tab1 />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </MobileLayout>
        </Helmet>
    );
}

Mobile.propTypes = {};

export default Mobile;
