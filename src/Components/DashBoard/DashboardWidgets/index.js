/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductOptions from './ProductOptions';
import ProductsDescription from './ProductsDescription';
import TableProduct from './TableProduct';

function DashboardWidgets(props) {
    const [showTabletProduct, setShowTabletProduct] = useState(false);
    const handleShowTableProduct = (item) => {
        setShowTabletProduct(true);
    };
    return (
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
            {/*/.row*/}
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Widgets</h1>
                </div>
            </div>
            {/*/.row*/}
            <div className="row">
                <ProductOptions
                    handleShowTableProduct={handleShowTableProduct}
                />
                <ProductsDescription showTabletProduct={showTabletProduct} />
                {/*/.row*/}
            </div>
        </div>
    );
}

DashboardWidgets.propTypes = {};

export default DashboardWidgets;
