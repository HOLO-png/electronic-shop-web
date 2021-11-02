/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProductOptions from './ProductOptions';
import ProductsDescription from './ProductsDescription';
import { useDispatch, useSelector } from 'react-redux';
import TableProduct from './TableProduct';
import {
    getMobilesApi,
    mobilesSelector,
} from '../../../Store/Reducer/mobile_api';
import {
    getLaptopsApi,
    laptopsSelector,
} from '../../../Store/Reducer/laptop_api';
import {
    getTabletsApi,
    tabletsSelector,
} from '../../../Store/Reducer/tablet_api';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from 'styled-components';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;

function DashboardWidgets(props) {
    const [showTabletProduct, setShowTabletProduct] = useState(false);
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const mobile_api = useSelector(mobilesSelector);
    const laptop_api = useSelector(laptopsSelector);
    const tablet_api = useSelector(tabletsSelector);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);
    const paginateRef = useRef(null);

    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts =
        products && products.slice(indexOfFirstProducts, indexOfLastProducts);

    useEffect(() => {
        dispatch(getMobilesApi());
        dispatch(getLaptopsApi());
        dispatch(getTabletsApi());
    }, [dispatch]);

    useEffect(() => {
        setLoading(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (mobile_api.length || laptop_api.length || tablet_api.length) {
                setLoading(false);
                document.body.style.overflow = '';
            }
        }, 600);
        return;
    }, [laptop_api, mobile_api, tablet_api]);

    const handleShowTableProduct = (item) => {
        setShowTabletProduct(true);
        switch (item) {
            case 'Mobile':
                mobile_api.length && setProducts(mobile_api);
                setCurrentPage(1);
                break;
            case 'Laptop':
                laptop_api.length && setProducts(laptop_api);
                setCurrentPage(1);
                break;
            case 'Tablet':
                tablet_api.length && setProducts(tablet_api);
                setCurrentPage(1);
                break;
            default:
                break;
        }
    };

    const paginate = (number) => {
        setCurrentPage(number);
        setTimeout(() => {
            window.scrollBy(0, -10);
        }, 500);
    };

    return (
        <>
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
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li>
                            <a href="#">
                                <em className="fa fa-home" />
                            </a>
                        </li>
                        <li className="active">Widgets</li>
                    </ol>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Widgets</h1>
                    </div>
                </div>
                <div className="row">
                    <ProductOptions
                        handleShowTableProduct={handleShowTableProduct}
                    />
                    <ProductsDescription
                        showTabletProduct={showTabletProduct}
                        products={currentProducts}
                        totalProduct={products}
                        productsPerPage={productsPerPage}
                        paginate={paginate}
                        ref={paginateRef}
                    />
                </div>
            </div>
        </>
    );
}

DashboardWidgets.propTypes = {};

export default DashboardWidgets;
