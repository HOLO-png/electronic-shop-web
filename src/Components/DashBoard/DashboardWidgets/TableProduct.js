import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import { products_dashboard } from '../../../assets/fake-data';
import numberWithCommas from '../../../utils/numberWithCommas';

function TableProduct(props) {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(null);

    const handleOnNavigation = (index) => {
        setVisible(true);
        setActive(index);
    };

    const handleSetVisible = () => {
        setVisible(false);
    };

    const handleRenderUITableItem = products_dashboard.map((item, index) => (
        <tr
            key={index}
            onClick={() => handleOnNavigation(index)}
            className={
                active === index ? 'product-item active-row' : 'product-item'
            }
        >
            <td style={{ width: 100 }}>
                <img alt={index} src={item.image} style={{ width: '100%' }} />
            </td>
            <td className="name">{item.name}</td>
            <td className="name">{item.trakemart}</td>
            <td className="name price">
                {numberWithCommas(item.price)}
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
                <tbody>
                    {handleRenderUITableItem}
                    {/* <tr className="active-row">
                    <td>Melissa</td>
                    <td>5150</td>
                </tr> */}
                </tbody>
            </table>
            <Navigation visible={visible} handleSetVisible={handleSetVisible} />
        </>
    );
}

TableProduct.propTypes = {};

export default TableProduct;
