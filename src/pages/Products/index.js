import React, { useRef, useState } from 'react';
import Helmet from '../../Components/Helmet';
import styled from 'styled-components';
import { product_common } from '../../assets/fake-data/products';
import {
    Alert,
    Button,
    Card,
    Col,
    Descriptions,
    Divider,
    Image,
    Popover,
    Rate,
    Row,
    Tag,
} from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    WechatOutlined,
} from '@ant-design/icons';
import { APP_SHARE } from '../../assets/fake-data/app-share';
import Meta from 'antd/lib/card/Meta';
import { Comment, Avatar, Form, List, Input } from 'antd';
import moment from 'moment';
import ProductItem from '../../Components/ProductItem/Comment';
import Comments from '../../Components/ProductItem/Comment';

const ProductsItem = styled.div`
    .slick-slide {
        width: 105px;
    }
    .ant-col {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .slick-arrow {
        color: #000;
        width: 27px;
        height: 45px;
        margin: 0 -7px;
        background: #33333333;
        border-radius: 2px;
    }
    img {
        cursor: pointer;
    }
    .product-interactive {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        .product-share {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 150px;
            p {
                margin: 0 10px;
                font-size: 17px;
            }
            span {
                margin-right: 7px;
            }
        }
        .product-like {
            display: flex;
            justify-content: center;
            align-items: center;
            i {
                font-size: 26px;
                color: red;
                cursor: pointer;
            }
            .product-cmt {
                margin: 0 5px;
                font-size: 17px;
            }
        }
    }
    .ant-row {
        width: 100%;
    }
    .ant-col.ant-col-14.gutter-row {
        padding-top: 50px;
        width: 100%;
        .ant-row {
            span.ant-tag.ant-tag-has-color {
                height: 22px;
                margin-top: 8px;
            }
            p.product-name {
                margin: 0;
                font-size: 24px;
            }
        }
        .ant-col.ant-col-6.gutter-row {
            display: contents;
            width: 100%;
            p {
                margin: 10px 10px;
            }
        }
        .ant-row {
            font-size: 17px;
        }
        p.product-star {
            color: #dfdf16;
            font-weight: 600;
        }
        .ant-row.product-price {
            width: 100%;
            height: 70px;
            background: #faf9f9;
            display: flex;
            align-items: center;
            p.product-text {
                margin: 0 10px;
                color: #f80404;
                font-size: 35px;
            }
        }
    }
    .ant-col.ant-col-18.gutter-row {
        .product-move-title {
            display: flex;
            justify-content: center;
            margin-right: 37px;
            margin-top: 10px;
            margin-left: -10px;
            p {
                margin: 0 10px;
            }
            i {
                margin-top: 10px;
            }
        }
        .product-move-fee {
            display: flex;
        }
    }
    .product-info {
        width: 80%;
        margin-left: 30px;
    }
    .ant-col.ant-col-18.gutter-row {
        display: block;
        margin-top: 10px;
        button.ant-btn {
            margin: 5px 10px;
        }
    }
    .buttons_added {
        margin-top: 10px;
        font-size: 20px;
        margin-left: 55px;
        .minus.is-form,
        .plus.is-form {
            width: 30px;
            height: 35px;
            background: #fff;
        }
        input.input-qty {
            width: 80px;
            height: 35px;
            font-size: 20px;
        }
    }
    .ant-row.product-add-cart {
        padding: 10px;
        button {
            width: 100%;
            height: 50px;
        }
    }
    p.product-move {
        color: #a2a2a2;
    }
    .ant-row.product-shop {
        width: 100%;
        display: flex;
        .ant-col.ant-col-10.gutter-row {
            display: contents;
            .product-shop-name {
                margin-left: 15px;
                font-size: 18px;
                p {
                    margin: 0;
                }
                p.product-work {
                    color: #aaa;
                    font-size: 15px;
                    margin-bottom: 10px;
                }
            }
        }
        .product-intro {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #bebebe;
            margin-top: 10px;
            p {
                color: #df0000;
                margin: 0 10px;
            }
        }
    }
`;
const ProductsCommans = styled.div`
    .ant-row {
        margin-top: 20px;
    }
    th.ant-descriptions-item-label {
        width: 13%;
        font-size: 17px;
        color: #919191;
    }
    .ant-descriptions-title {
        font-size: 30px;
        color: #727272;
    }
    td.ant-descriptions-item-content {
        color: #d50000;
        font-size: 15px;
    }
    .ant-card-meta-description {
        font-size: 20px;
        color: red;
        text-align: center;
    }
    .ant-card.ant-card-bordered.ant-card-hoverable {
        margin: 7px 0;
    }
    h1 {
        font-size: 30px;
        color: #727272;
        font-weight: 600;
    }
    span.ant-divider-inner-text {
        color: #df0000;
    }
    p {
        font-size: 16px;
        color: #646464;
    }
    .product-max-saler {
        color: #cfcfcf;
        font-size: 20px;
    }
`;
const ProductsCmt = styled.div`
    button.ant-btn {
        margin: 5px;
    width: auto;
    height: 36px;
    color: #585858;
}
    }
    span.ant-tag.ant-tag-red {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 130px;
    }
    strong {
        margin: 5px;
        font-size: 30px;
        color: #fac600;
    }
    p {
        margin: 0;
        font-size: 18px;
    }
    .product-cmt-star {
        margin-right: 20px;
    }
`;
export default function Products() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(400);
    const [hearl, setHearl] = useState(false);
    const [imgProduct, setImgProduct] = useState('');
    const [amount, setAmount] = useState(1);
    const [online, setOnline] = useState(true);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const onHandleValueNum = () => (amount < 1 ? setAmount(1) : amount);
    const renderAppShare = () =>
        APP_SHARE.map((item) => (
            <Avatar
                size="small"
                src={item.img}
                key={item.title}
                title={item.title}
            />
        ));
    const renderHearlActive = () =>
        hearl ? (
            <i className="fal fa-heart" onClick={() => setHearl(!hearl)}></i>
        ) : (
            <i className="fas fa-heart" onClick={() => setHearl(!hearl)}></i>
        );
    const contentMoveAddress = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    const contentMoveFee = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    return (
        <Helmet title="Products">
            <ProductsItem>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{
                        background: '#f8f8f8',
                        boxShadow: '0 0 2px 2px rgb(227 227 227)',
                    }}
                >
                    <Col className="gutter-row" span={10}>
                        <div className="product-img">
                            <Image
                                style={{ width: '100%' }}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </div>
                        <div className="product-slides">
                            <div
                                style={{
                                    width: width + 'px',
                                    display: display ? 'block' : 'none',
                                }}
                            >
                                <Slider {...settings}>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '93%' }}
                                            src="https://i.pinimg.com/564x/a7/18/bd/a718bdbf6acf01841a6095dee267e640.jpg"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '93%' }}
                                            src="https://i.pinimg.com/564x/a7/18/bd/a718bdbf6acf01841a6095dee267e640.jpg"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '93%' }}
                                            src="https://i.pinimg.com/564x/a7/18/bd/a718bdbf6acf01841a6095dee267e640.jpg"
                                        />
                                    </div>
                                    <div className="product-slide-item">
                                        <img
                                            alt=""
                                            style={{ width: '93%' }}
                                            src="https://i.pinimg.com/564x/a7/18/bd/a718bdbf6acf01841a6095dee267e640.jpg"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="product-interactive">
                            <div className="product-share">
                                <p>Chia Sẻ:</p>
                                <div className="product-app-share">
                                    {renderAppShare()}
                                </div>
                            </div>
                            <div className="product-like">
                                {renderHearlActive()}
                                <p className="product-cmt">Đã Thích (2,5k)</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={14}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <p className="product-name">
                                <Tag color="#f50">Mall</Tag>
                                Mặt nạ giấy dưỡng da Hàn Quốc innisfree My Real
                                Squeeze Mask 20ml
                            </p>
                        </Row>
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            style={{ width: '100%' }}
                        >
                            <Col className="gutter-row" span={6}>
                                <p className="product-star">
                                    <u>5.0</u>
                                </p>
                                <Rate
                                    disabled
                                    defaultValue={2}
                                    style={{ margin: '5px' }}
                                />
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <p className="product-evaluate">
                                    <u>4k</u>
                                </p>
                                <p className="product-evaluate-title">
                                    Đánh Giá
                                </p>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <p className="product-sold">
                                    <i>45,6k</i>
                                </p>
                                <p className="product-sold-title">Đã Bán</p>
                            </Col>
                        </Row>
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            className="product-price"
                        >
                            <p className="product-text">₫27.000</p>
                        </Row>
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            style={{ borderBottom: '1px solid #cfcfcf' }}
                        >
                            <Col className="gutter-row" span={6}>
                                <p className="product-move">Vận Chuyển</p>
                            </Col>
                            <div className="product-info">
                                <Col className="gutter-row" span={18}>
                                    <div className="product-move-title">
                                        <i
                                            className="fad fa-truck"
                                            style={{ color: '#56b09b' }}
                                        ></i>
                                        <div className="product-move-name">
                                            <p>Miễn Phí Vận Chuyển</p>
                                            <p>
                                                Miễn Phí Vận Chuyển khi đơn đạt
                                                giá trị tối thiểu
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={18}>
                                    <div className="product-move-title">
                                        <i
                                            className="fal fa-truck"
                                            style={{ color: '#ff6464' }}
                                        ></i>
                                        <div className="product-move-name">
                                            <div className="product-move-fee">
                                                <p className="product-move-name">
                                                    Vận Chuyển Tới
                                                </p>
                                                <Popover
                                                    content={contentMoveAddress}
                                                    title="Title"
                                                    trigger="click"
                                                >
                                                    <Button
                                                        style={{
                                                            margin: '5px 0px',
                                                        }}
                                                    >
                                                        Thôn Xuân Quý- Xã Tam
                                                        Thăng
                                                    </Button>
                                                </Popover>
                                            </div>
                                            <div className="product-move-fee">
                                                <p className="product-move-name">
                                                    Phí Vận Chuyển
                                                </p>
                                                <Popover
                                                    content={contentMoveFee}
                                                    title="Title"
                                                    trigger="hover"
                                                >
                                                    <Button
                                                        style={{
                                                            margin: '5px 0px',
                                                        }}
                                                    >
                                                        đ32.800
                                                    </Button>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={6}>
                                <p className="product-move">Varation</p>
                            </Col>
                            <Col
                                className="gutter-row"
                                span={18}
                                style={{ marginLeft: '35px' }}
                            >
                                <Button>Green Tea - Trà xanh</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                                <Button>Pomegranate - Lựu</Button>
                            </Col>
                        </Row>
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            style={{ margin: '20px 0' }}
                        >
                            <Col className="gutter-row" span={6}>
                                <p className="product-amount product-move">
                                    Số Lượng
                                </p>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="buttons_added">
                                    <input
                                        className="minus is-form"
                                        type="button"
                                        value="---"
                                        onClick={() => setAmount(amount - 1)}
                                    />
                                    <input
                                        aria-label="quantity"
                                        className="input-qty"
                                        max="Số tối đa"
                                        min="Số tối thiểu"
                                        name=""
                                        type="number"
                                        value={onHandleValueNum()}
                                    />
                                    <input
                                        className="plus is-form"
                                        type="button"
                                        value="+"
                                        onClick={() => setAmount(amount + 1)}
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <p
                                    className="product-amount"
                                    style={{ color: '#c3c3c3' }}
                                >
                                    749 sản phẩm có sẵn
                                </p>
                            </Col>
                        </Row>
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            className="product-add-cart"
                        >
                            <Col className="gutter-row" span={8}>
                                <Button
                                    size="large"
                                    style={{
                                        width: '180px',
                                        background: '#ffe7e7',
                                    }}
                                    danger
                                    icon={<ShoppingCartOutlined />}
                                >
                                    Thêm Vào Giỏ Hàng
                                </Button>
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{ width: '170px' }}
                            >
                                <Button size="large" type="danger">
                                    Mua Ngay
                                </Button>
                            </Col>
                        </Row>
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            style={{ marginTop: '18px' }}
                        >
                            <Col className="gutter-row" span={8}>
                                <Popover
                                    content={contentMoveFee}
                                    title="Title"
                                    trigger="hover"
                                >
                                    <Alert
                                        message="7 ngày miễn phí trả hàng"
                                        type="success"
                                    />
                                </Popover>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Popover
                                    content={contentMoveFee}
                                    title="Title"
                                    trigger="hover"
                                >
                                    <Alert
                                        message="Hàng chính hãng 100%"
                                        type="info"
                                    />
                                </Popover>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Popover
                                    content={contentMoveFee}
                                    title="Title"
                                    trigger="hover"
                                >
                                    <Alert
                                        message="Miễn phí vận chuyển"
                                        type="warning"
                                    />
                                </Popover>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    className="product-shop"
                    style={{
                        padding: '10px',
                        background: '#f8f8f8',
                        boxShadow: '0 0 2px 2px rgb(227 227 227)',
                        marginTop: '20px',
                    }}
                >
                    <Col className="gutter-row" span={10}>
                        <Image
                            style={{ width: '100px' }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <div className="product-shop-name">
                            <p>innisfreevietnam_officialstore</p>
                            <p className="product-work">
                                {online ? (
                                    <p>
                                        <i
                                            className="fad fa-dot-circle"
                                            style={{
                                                color: 'green',
                                                marginRight: '5px',
                                            }}
                                        ></i>
                                        Đang Hoạt Động
                                    </p>
                                ) : (
                                    'Online 6 Phút Trước'
                                )}
                            </p>
                            <div className="product-btn-shop">
                                <Button
                                    size="large"
                                    style={{
                                        background: '#ffe7e7',
                                        marginRight: '10px',
                                    }}
                                    danger
                                    icon={<WechatOutlined />}
                                >
                                    Chat Liền
                                </Button>
                                <Button size="large" icon={<ShopOutlined />}>
                                    Xem Shop
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col
                        className="gutter-row"
                        span={4}
                        style={{
                            alignItems: 'flex-start',
                            marginLeft: '100px',
                        }}
                    >
                        <div className="product-intro">
                            Đánh Giá<p>171,8k</p>
                        </div>
                        <div className="product-intro">
                            Sản Phẩm<p>389</p>
                        </div>
                    </Col>
                    <Col
                        className="gutter-row"
                        span={5}
                        style={{ alignItems: 'flex-start' }}
                    >
                        <div className="product-intro">
                            Tỷ Lệ Phản Hồi<p>97%</p>
                        </div>
                        <div
                            className="product-intro"
                            style={{ width: '110%' }}
                        >
                            Thời Gian Phản Hồi<p>Trong vài giờ</p>
                        </div>
                    </Col>
                    <Col
                        className="gutter-row"
                        span={5}
                        style={{ alignItems: 'flex-start' }}
                    >
                        <div className="product-intro">
                            Tham Gia<p>26 Tháng trước</p>
                        </div>
                        <div className="product-intro">
                            Người theo dõi<p>1,1tr</p>
                        </div>
                    </Col>
                </Row>
            </ProductsItem>
            <ProductsCommans>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{
                        background: '#f8f8f8',
                        boxShadow: '0 0 2px 2px rgb(227 227 227)',
                    }}
                >
                    <Col className="gutter-row" span={19}>
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
                                Shopee - Sắc Đẹp - Chăm sóc da mặt - Mặt nạ
                            </Descriptions.Item>
                            <Descriptions.Item label="Thương Hiệu">
                                innisfree
                            </Descriptions.Item>
                            <Descriptions.Item label="Loại mặt nạ">
                                Mặt nạ thông thường
                            </Descriptions.Item>
                            <Descriptions.Item label="Kho hàng">
                                15793
                            </Descriptions.Item>
                            <Descriptions.Item label="Gửi từ">
                                Quận 12, TP. Hồ Chí Minh
                            </Descriptions.Item>
                            <Descriptions.Item label="Bảo Hành">
                                14 Tháng
                            </Descriptions.Item>
                            <Descriptions.Item label="Config Info">
                                Data disk type: MongoDB
                                <br />
                                Database version: 3.4
                                <br />
                                Package: dds.mongo.mid
                                <br />
                                Storage space: 10 GB
                                <br />
                                Replication factor: 3
                                <br />
                                Region: East China 1
                            </Descriptions.Item>
                        </Descriptions>
                        <div
                            className="product-desc-info"
                            style={{ marginTop: '50px' }}
                        >
                            <h1>MÔ TẢ SẢN PHẨM</h1>
                            <Divider orientation="left">
                                MẶT NẠ GIẤY DƯỠNG DA HÀN QUỐC INNISFREE MY REAL
                                SQUEEZE MASK 20ML
                            </Divider>
                            <p>
                                Thành phần, công dụng- Chất liệu 100% cellulose
                                mỏng nhẹ, làm từ bạc hà giúp đưa dưỡng chất hiệu
                                quả vào làn da. - Phương pháp vắt và ép lạnh để
                                tối ưu nhất các thành phần giàu dưỡng chất. - Có
                                3 dạng mặt nạ giấy + Dạng tinh chất dưỡng ẩm
                                phục hồi da + Dạng nước tinh chất dịu mát + Dạng
                                kem giàu dinh dưỡng
                            </p>
                            <Divider orientation="left">
                                THÔNG TIN SẢN PHẨM
                            </Divider>
                            <p>
                                Thành phần, công dụng - Chất liệu 100% cellulose
                                mỏng nhẹ, làm từ bạc hà giúp đưa dưỡng chất hiệu
                                quả vào làn da. - Phương pháp vắt và ép lạnh để
                                tối ưu nhất các thành phần giàu dưỡng chất. - Có
                                3 dạng mặt nạ giấy + Dạng tinh chất dưỡng ẩm
                                phục hồi da + Dạng nước tinh chất dịu mát + Dạng
                                kem giàu dinh dưỡng Mặt nạ nhân sâm (Ginseng) –
                                Dạng kem giàu dinh dưỡng - Thành phần chính từ
                                nhân sâm Hàn Quốc, chất dinh dưỡng phong phú
                                nuôi dưỡng và phục hồi làn da, giúp da khoẻ mạnh
                                hơn. Thiết kế sản phẩm - Thiết kế thông minh với
                                2 miếng vải dư nằm ngoài khuôn mặt giúp gỡ mặt
                                nạ ra một cách dễ dàng. Phù hợp loại da - Mọi
                                loại da. Hướng dẫn sử dụng: - Sau khi rửa mặt,
                                dùng nước cân bằng làm sạch và cân bằng kết cấu
                                da. - Lấy mặt nạ ra khỏi bao bì, đắp lên da
                                tránh vùng mắt, môi. - Sau 10-20 phút, tháo mặt
                                nạ ra. - Vỗ nhẹ để dưỡng chất thẩm thấu. Hướng
                                dẫn bảo quản - Không bảo quản nơi có nhiệt độ
                                quá cao hoặc quá thấp, nơi có ánh sáng trực
                                tiếp.
                            </p>
                            <Divider orientation="left">
                                THÔNG TIN THƯƠNG HIỆU
                            </Divider>
                            <p>
                                Innisfree là thương hiệu chia sẻ những lợi ích
                                của thiên nhiên từ hòn đảo Jeju tinh khiết, mang
                                đến vẻ đẹp của cuộc sống xanh, thân thiện với
                                môi trường nhằm bảo vệ cân bằng hệ sinh thái.
                                Mục tiêu innisfree muốn mang lại là vẻ đẹp khoẻ
                                mạnh thực sự cho khách hàng thông qua những ưu
                                đãi từ thiên nhiên. -- Cảm ơn bạn đã đồng hành
                                cùng innisfree Việt Nam. -- Xuất xứ: Hàn Quốc.
                                Hạn sử dụng: 2 năm kể từ ngày sản xuất. Công ty
                                chịu trách nhiệm nhập khẩu và phân phối độc
                                quyền: Công ty TNHH AmorePacific Việt Nam. Mẫu
                                mã bao bì sản phẩm sẽ thay đổi tùy vào đợt nhập
                                hàng.
                            </p>
                        </div>
                        <ProductsCmt>
                            <h1>ĐÁNH GIÁ SẢN PHẨM</h1>
                            <Tag color="red">
                                <div className="product-cmt-star">
                                    <p>
                                        <strong>5.0</strong> trên 5
                                    </p>
                                    <Rate
                                        disabled
                                        defaultValue={5}
                                        style={{ margin: '5px' }}
                                    />
                                </div>

                                <div className="product-cmt-btn">
                                    <Button>Tất Cả</Button>
                                    <Button>5 Sao (3,9k)</Button>
                                    <Button>4 Sao (63)</Button>
                                    <Button>3 Sao (14)</Button>
                                    <Button>2 Sao (4)</Button>
                                    <Button>1 Sao (12)</Button>
                                    <br />
                                    <Button>Có Bình Luận (1,3k)</Button>
                                    <Button>Có Hình Ảnh/Video (1,2k)</Button>
                                </div>
                            </Tag>
                            <div className="product-comments">
                                <Comments />
                            </div>
                        </ProductsCmt>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div className="product-max-saler">
                            Top Sản Phẩm Bán Chạy
                        </div>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product_common} />}
                        >
                            <Meta
                                title="GROWPLUS+ DIAMOND HIGH ENERGY NUTRITION FOR THIN & POOR ABSORBED PEOPLE"
                                description="đ33.000"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product_common} />}
                        >
                            <Meta
                                title="GROWPLUS+ DIAMOND HIGH ENERGY NUTRITION FOR THIN & POOR ABSORBED PEOPLE"
                                description="đ33.000"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product_common} />}
                        >
                            <Meta
                                title="GROWPLUS+ DIAMOND HIGH ENERGY NUTRITION FOR THIN & POOR ABSORBED PEOPLE"
                                description="đ33.000"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product_common} />}
                        >
                            <Meta
                                title="GROWPLUS+ DIAMOND HIGH ENERGY NUTRITION FOR THIN & POOR ABSORBED PEOPLE"
                                description="đ33.000"
                            />
                        </Card>
                    </Col>
                </Row>
            </ProductsCommans>
        </Helmet>
    );
}
