import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryPage from '../../Components/Product/Mobile/CategoryPage';
import { useDispatch, useSelector } from 'react-redux';
import {
    data1_02,
    data10,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7_02,
    data8,
    data9,
    slide_laptop,
} from '../../assets/fake-data';
import { getLaptopsApi, laptopsSelector } from '../../Store/Reducer/laptop_api';

function Laptop(props) {
    const mobile_api = useSelector(laptopsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLaptopsApi());
    }, [dispatch]);

    return (
        <CategoryPage
            mobile_api={mobile_api}
            data1={data1_02}
            data10={data10}
            data2={data2}
            data3={data3}
            data4={data4}
            data5={data5}
            data6={data6}
            data7={data7_02}
            data8={data8}
            data9={data9}
            category1="laptop"
            category2="pc"
            slide_mobile={slide_laptop}
            title="Laptop"
            slideStatus="block"
        />
    );
}

Laptop.propTypes = {};

export default Laptop;
