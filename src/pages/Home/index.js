import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import heroSlides, { slide_home } from '../../assets/fake-data';
import police from '../../assets/fake-data/policeCartApi';

import Helmet from '../../Components/Helmet';
import HeroSlides from '../../Components/HeroSlides.js';
import PoliceCart from '../../Components/PoliceCart';
import Section, { SectionBody, SectionTitle } from '../../Components/Section';
import Grid from '../../Components/Grid';
import ProductCart from '../../Components/ProductCart';
import { BackTop, Carousel, Col, Divider, Row, Tooltip } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Sidebar from '../../Components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import GenuineBrand from '../../Components/GenuineBrand';
import SriceShock from '../../Components/SriceShock';
import CatgorySelect from '../../Components/CatgorySelect';
import { getMobilesApi, mobilesSelector } from '../../Store/Reducer/mobile_api';
import { getProducts } from '../../utils/randomProduct';
import { getLaptopsApi, laptopsSelector } from '../../Store/Reducer/laptop_api';
import { getTabletsApi, tabletsSelector } from '../../Store/Reducer/tablet_api';
import ScaleLoader from 'react-spinners/ScaleLoader';

import AOS from 'aos';
import { loadingProductHome } from '../../utils/loadingProductHome';
import ButtonLoading from '../../Components/ButtonLoading';
import { css } from 'styled-components';
import { themeSelector } from '../../Store/Reducer/setTheme';
import { openNotification } from '../../utils/messageAlear';
import EvaluateWebs from '../../Components/EvaluateWebs';
import BoxChat from '../../Components/BoxChat';
import { useFirestore } from '../../Hooks/useFirestore';
import { AuthContext } from '../../Context/AuthProvider';

const text = <span>Cuộn lên đầu trang</span>;

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 33,
};

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;

export default function Home() {
    const {
        user: { uid },
    } = React.useContext(AuthContext);

    const dispatch = useDispatch();
    const [height, setHeight] = useState(760);
    const [productAll, setProductAll] = useState([]);
    const [loading, setLoading] = useState(false);
    const mobile_api = useSelector(mobilesSelector);
    const laptop_api = useSelector(laptopsSelector);
    const tablet_api = useSelector(tabletsSelector);
    // const theme = useSelector(themeSelector);
    const [minHeight, setMinHeight] = useState(0);

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);

    const rooms = useFirestore('rooms', roomsCondition);

    useEffect(() => {
        const min = loadingProductHome(productAll);
        setMinHeight(min);
    }, [minHeight, productAll]);

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (mobile_api.length && laptop_api.length && tablet_api.length) {
                setLoading(false);
                document.body.style.overflow = '';
            }
        }, 600);
    }, [laptop_api, mobile_api, tablet_api]);

    useEffect(() => {
        dispatch(getMobilesApi());
        dispatch(getLaptopsApi());
        dispatch(getTabletsApi());
    }, [dispatch]);

    useEffect(() => {
        setProductAll([...laptop_api, ...mobile_api, ...tablet_api]);
    }, [laptop_api, mobile_api, tablet_api]);

    const mobileTabletTop = [...mobile_api, ...tablet_api];

    const handleLoadingProductCart = () => {
        if (height < minHeight) {
            setHeight(height + 380);
        }
    };

    const handleImportProduct = (products) => {
        const min = loadingProductHome(products);
        setMinHeight(min);
        setProductAll(products);
        setHeight(loadingProductHome(products));
    };
    // handle category product Home

    const handleShowMessage = () => {
        openNotification(
            'Nhát làm quá nên chưa làm trang này hihi!',
            'Dỡn chứ để check trang notFound có hoạt động ko á mà',
        );
    };
    return (
        <Helmet title="Home">
            {loading && (
                <div className="loading__container">
                    <ScaleLoader
                        color={'#2963B3'}
                        loading={loading}
                        css={override}
                        size={200}
                    />
                </div>
            )}
            {/* Show heroSlides */}
            <div className="Home">
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
                                <Link
                                    to="/policy"
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <PoliceCart
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                        onClick={handleShowMessage}
                                    />
                                </Link>
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end section */}
                <SriceShock slideStatus={true} mobile_api={mobile_api} />
                <GenuineBrand />
                {/* selling section */}
                <Section data-aos="fade-up">
                    <SectionTitle icon="crown">MUA NHIỀU NHẤT</SectionTitle>

                    <Divider
                        orientation="center"
                        style={{
                            transform: 'translateY(30px)',
                            color: '#c3c3c3',
                        }}
                    >
                        <i className="fad fa-mobile"></i> IPHONE + TABLET
                    </Divider>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {getProducts(4, mobileTabletTop).map(
                                (item, index) => (
                                    <div data-aos="fade-up" key={index}>
                                        <ProductCart
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            status={item.status}
                                            star={item.star}
                                            amount={item.amount}
                                            category={item.category}
                                            capacity={item.capacity}
                                            varation={item.varation}
                                            image={item.image}
                                            description={item.description}
                                            priceOld={item.priceOld}
                                            height="400"
                                            img_width="95%"
                                            right="11px"
                                        ></ProductCart>
                                    </div>
                                ),
                            )}
                        </Grid>
                    </SectionBody>
                    <Divider
                        orientation="center"
                        style={{
                            transform: 'translateY(30px)',
                            color: '#c3c3c3',
                        }}
                    >
                        <i className="fad fa-laptop"></i> LAPTOP
                    </Divider>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {getProducts(4, laptop_api).map((item, index) => (
                                <div data-aos="fade-up" key={index}>
                                    <ProductCart
                                        data-aos="fade-up"
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        status={item.status}
                                        star={item.star}
                                        amount={item.amount}
                                        category={item.category}
                                        capacity={item.capacity}
                                        varation={item.varation}
                                        image={item.image}
                                        description={item.description}
                                        priceOld={item.priceOld}
                                        height="400"
                                        img_width="95%"
                                        right="11px"
                                    ></ProductCart>
                                </div>
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end selling section */}
                {/* new arrival section */}
                <CatgorySelect
                    // handleCategorySamSung={handleCategorySamSung}
                    // handleProductAll={handleProductAll}
                    handleImportProduct={handleImportProduct}
                    productAll={[...laptop_api, ...mobile_api, ...tablet_api]}
                />
                <SectionBody>
                    <div
                        className="cart-products"
                        style={{ height: height, overflow: 'hidden' }}
                    >
                        <Grid col={5} mdCol={2} smCol={1} gap={0}>
                            {getProducts(21, productAll).map((item, index) => (
                                <div data-aos="fade-up" key={index}>
                                    <ProductCart
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        status={item.status}
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
                            ))}
                        </Grid>
                    </div>
                </SectionBody>
                {/* end arrival section */}
                <ButtonLoading
                    name="Xem Thêm"
                    handleLoadingProductCart={handleLoadingProductCart}
                    className={
                        height === minHeight
                            ? 'btn-loading-product hidden'
                            : 'btn-loading-product'
                    }
                />
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
                            <VerticalAlignTopOutlined />
                        </div>
                    </BackTop>
                </Tooltip>
                <Sidebar />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} data-aos="fade-right">
                        <Carousel autoplay>
                            {slide_home.map((item, index) => (
                                <div key={index}>
                                    <img alt={item.title} src={item.img} />
                                </div>
                            ))}
                        </Carousel>
                    </Col>
                    <Col className="gutter-row" span={12} data-aos="fade-left">
                        <iframe
                            style={{ width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/ikzXR2iV7Zs"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Col>
                </Row>
                <EvaluateWebs />
                <BoxChat />
            </div>
        </Helmet>
    );
}
