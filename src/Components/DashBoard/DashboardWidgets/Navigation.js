/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

function Navigation(props) {
    const { visible, handleSetVisible, product, handleSetActiveProductDetail } =
        props;
    const [active, setActive] = useState(null);

    const onClose = () => {
        handleSetVisible(false);
        handleSetActiveProductDetail();
    };

    const arrayImages = () => {
        const arrayImage = [];
        product &&
            product.image.forEach((element) => {
                arrayImage.push(element[0]);
            });
        return arrayImage;
    };

    const handleSetProduct = (index) => {
        setActive(index);
    };

    return (
        <>
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <div className="drawer-product-dashboard">
                    <div className="row" style={{ paddingTop: 5 }}>
                        <div className="product-switching">
                            {arrayImages().map((item, index) => (
                                <div
                                    className={`product-image-item ${
                                        active === index ? 'active' : ''
                                    }`}
                                    key={item}
                                    onClick={() => handleSetProduct(index)}
                                >
                                    <img alt="" src={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

Navigation.propTypes = {};

export default Navigation;
