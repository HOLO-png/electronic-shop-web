import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Pagination from './Pagination';
import { products_dashboard } from '../../../assets/fake-data';
import numberWithCommas from '../../../utils/numberWithCommas';

function TableProduct(props) {
    const { products, productsPerPage, totalProduct, paginate } = props;
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState(null);
    const [active, setActive] = useState(null);

    const handleOnNavigation = (index, item) => {
        setVisible(true);
        setActive(index);
        setProduct(item);
    };

    const handleSetVisible = () => {
        setVisible(false);
    };

    const handleRenderUITableItem =
        products.length &&
        products.map((item, index) => (
            <tr
                key={index}
                onClick={() => handleOnNavigation(index, item)}
                className={
                    active === index
                        ? 'product-item active-row'
                        : 'product-item'
                }
            >
                <td style={{ width: 100 }}>
                    <img
                        alt={index}
                        src={item.image[0][0]}
                        style={{ width: '100%' }}
                    />
                </td>
                <td className="name">{item.name}</td>
                <td className="name">{item.description.trademark}</td>
                <td className="name price">
                    {numberWithCommas(item.price[0])}
                    <sup> đ</sup>
                </td>
            </tr>
        ));
    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Trademark</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{handleRenderUITableItem}</tbody>
            </table>
            <Navigation
                visible={visible}
                handleSetVisible={handleSetVisible}
                product={product}
            />
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={totalProduct}
                paginate={paginate}
            />
        </>
    );
}

TableProduct.propTypes = {};

export default TableProduct;
