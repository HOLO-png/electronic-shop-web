import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Affix, Alert, Button, Col, Row, Checkbox } from 'antd';
import styled from 'styled-components';
import { category_product } from '../../assets/fake-data/category-product';

const CatgorySelectStyled = styled.div`
    margin-bottom: 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .category-select-title {
        height: 50px;
        display: flex;
        align-items: center;
        margin: 0 20px;
        font-size: 22px;
        color: #197468;
        i.fad.fa-lightbulb-on {
            margin-right: 15px;
            font-size: 30px;
            color: #e69707;
        }
    }
    .ant-col.ant-col-3.gutter-row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0;
    }
    .category-select-img {
        width: 30%;
        height: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
    }
    .category-select-card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        &:nth-child(8) {
            border-right: none;
        }
    }
`;
function CatgorySelect(props) {
    const { productAll, handleImportProduct } = props;
    const [top, setTop] = useState(80);
    const [productState, setProductState] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setProductState(productAll);
    }, [productAll]);

    const handleCategory = (name) => {
        const productHandle = productAll.filter(
            (item) => item.description.trademark === name,
        );
        handleImportProduct(productHandle);
    };

    const handleProductAll = () => {
        handleImportProduct(productState);
    };

    const handleActiveCategory = (name, index) => {
        switch (name) {
            case 'D??nh cho b???n':
                handleProductAll();
                break;
            case 'Sam Sung Th???i Th?????ng':
                handleCategory('Samsung');
                break;
            case 'Xiaomi Gi?? R???':
                handleCategory('Xiaomi');
                break;
            case '?????p H???p Hawei':
                handleCategory('Huawei');
                break;
            case 'Si??u ph???m Oppo':
                handleCategory('OPPO');
                break;
            case 'LG H??? Tr???':
                handleCategory('LG');
                break;
            case 'Nokia C???c B???n':
                handleCategory('Nokia');
                break;
            case 'C???c Vip Apple':
                handleCategory('Apple');
                break;
            default:
                break;
        }
        setActive(index);
    };
    const renderCategoryProduct = () =>
        category_product.map((item, index) => (
            <Col
                className="gutter-row"
                span={3}
                style={{ padding: 0 }}
                key={index}
            >
                <div
                    className={
                        active === index
                            ? 'category-select-card active'
                            : 'category-select-card'
                    }
                    onClick={() => handleActiveCategory(item.title, index)}
                >
                    <div className="category-select-img">
                        <img alt="" src={item.image} />
                    </div>
                    <Button type="link">{item.title}</Button>
                </div>
            </Col>
        ));
    return (
        <Affix offsetTop={top}>
            <CatgorySelectStyled>
                <div className="category-select-title">
                    <i className="fad fa-lightbulb-on"></i> G???i ?? H??m Nay
                </div>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{
                        margin: 0,
                        borderTop: ' 5px solid #f8f8f8',
                        borderBottom: ' 5px solid #f8f8f8',
                        borderRadius: '5px',
                    }}
                >
                    {renderCategoryProduct()}
                </Row>
            </CatgorySelectStyled>
        </Affix>
    );
}

CatgorySelect.propTypes = {};

export default CatgorySelect;
