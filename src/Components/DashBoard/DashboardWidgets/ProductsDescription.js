/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse, Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import CompleteSearch from './SearchProduct';
import CategorySelect from './CategorySelect';
import TableProduct from './TableProduct';

const { Panel } = Collapse;
const { Option } = Select;

const genExtra = () => (
    <SettingOutlined
        onClick={(event) => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
        }}
    />
);

function callback(key) {
    console.log(key);
}

const category_product = ['All', 'Mobile', 'Laptop', 'Tablet'];
const trademark = ['Apple', 'Oppo', 'SamSung', 'Nokia'];
const star = ['5', '4', '3', '2', '1'];

function ProductsDescription(props) {
    const {
        showTabletProduct,
        products,
        productsPerPage,
        totalProduct,
        paginate,
    } = props;
    return (
        <div className="col-md-8">
            <div className="panel panel-default">
                <div className="panel-heading">
                    Product Description
                    <span className="pull-right clickable panel-toggle panel-button-tab-left">
                        <i class="fad fa-plus"></i>
                    </span>
                </div>
                {showTabletProduct ? (
                    <div className="panel-body">
                        <Collapse
                            onChange={callback}
                            expandIconPosition="right"
                        >
                            <Panel
                                header="Tìm Kiếm Sản Phẩm"
                                key="1"
                                extra={genExtra()}
                            >
                                <div>
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <p
                                                className=""
                                                style={{ margin: '27px 0' }}
                                            >
                                                Nhập Giá Trị Cần Tìm :
                                            </p>
                                            <p
                                                className=""
                                                style={{ margin: '27px 0' }}
                                            >
                                                Thể Loại Sản Phẩm :
                                            </p>
                                            <p
                                                className=""
                                                style={{ margin: '27px 0' }}
                                            >
                                                Thương Hiệu :
                                            </p>
                                            <p
                                                className=""
                                                style={{ margin: '27px 0' }}
                                            >
                                                Sao :
                                            </p>
                                            <p
                                                className=""
                                                style={{ margin: '27px 0' }}
                                            >
                                                Giá Tiền:
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <CompleteSearch />
                                            <CategorySelect
                                                product={category_product}
                                            />
                                            <CategorySelect
                                                product={trademark}
                                            />
                                            <CategorySelect product={star} />
                                            <Input
                                                placeholder="Nhập Số Tiền"
                                                style={{
                                                    width: 300,
                                                    marginTop: 10,
                                                }}
                                            />
                                            <Button
                                                type="primary"
                                                style={{ margin: '27px 0' }}
                                            >
                                                Tìm Kiếm
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                        <div className="row">
                            <div className="col-lg-12 panel-heading">
                                Sản Phẩm Trong Kho
                            </div>
                            <div className="col-lg-12">
                                <TableProduct
                                    products={products}
                                    productsPerPage={productsPerPage}
                                    totalProduct={totalProduct}
                                    paginate={paginate}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

ProductsDescription.propTypes = {};

export default ProductsDescription;
