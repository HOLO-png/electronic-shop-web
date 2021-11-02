/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import ProductOptionItem from './ProductOptionItem';
import { product_options_demo } from '../../../assets/fake-data';
import CategorySetting from './CategorySetting';

function ProductOptions(props) {
    const { handleShowTableProduct } = props;
    const renderProductOptions = product_options_demo.map((item, index) => (
        <ProductOptionItem
            item={item}
            key={index}
            handleShowTableProduct={handleShowTableProduct}
        />
    ));
    return (
        <div className="col-md-4">
            <div className="panel panel-default articles">
                <div className="panel-heading">
                    Product Options
                    <ul className="pull-right panel-settings panel-button-tab-right">
                        <li className="dropdown">
                            <a
                                className="pull-right dropdown-toggle"
                                data-toggle="dropdown"
                                href="#"
                            >
                                <em className="fa fa-cogs" />
                            </a>
                        </li>
                    </ul>
                    <span className="pull-right clickable panel-toggle panel-button-tab-left">
                        <i class="fad fa-plus"></i>
                    </span>
                </div>
                <div className="panel-body articles-container">
                    <div className="article border-bottom">
                        <div className="col-xs-12">
                            <div
                                className="row product-hunt"
                                style={{ alignItems: 'flex-start' }}
                            >
                                <CategorySetting />
                            </div>
                        </div>
                        <div className="col-xs-12">{renderProductOptions}</div>
                        <div className="clear" />
                    </div>
                    {/*End .article*/}
                </div>
            </div>
            {/*End .articles*/}
        </div>
    );
}

ProductOptions.propTypes = {};

export default ProductOptions;
