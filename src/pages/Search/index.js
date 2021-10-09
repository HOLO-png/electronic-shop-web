import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMobilesApi, mobilesSelector } from '../../Store/Reducer/mobile_api';
import {
    data10,
    data2,
    data3,
    data4,
    data5,
    data6,
    data8,
    data9,
    slide_mobile,
} from '../../assets/fake-data';
import CategoryPage from '../../Components/Product/Mobile/CategoryPage';
import { getLaptopsApi, laptopsSelector } from '../../Store/Reducer/laptop_api';
import { getTabletsApi, tabletsSelector } from '../../Store/Reducer/tablet_api';
import { useParams } from 'react-router-dom';

function Search(props) {
    const { keyWord } = useParams();
    const mobile_api = useSelector(mobilesSelector);
    const laptop_api = useSelector(laptopsSelector);
    const tablet_api = useSelector(tabletsSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMobilesApi());
        dispatch(getLaptopsApi());
        dispatch(getTabletsApi());
    }, [dispatch]);

    const product_search = [...mobile_api, ...laptop_api, ...tablet_api];

    const handleProductToSearch = () => {
        return product_search.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1 ||
                item.description.format
                    .toLowerCase()
                    .indexOf(keyWord.toLowerCase()) !== -1 ||
                item.description.trademark
                    .toLowerCase()
                    .indexOf(keyWord.toLowerCase()) !== -1
            );
        });
    };

    return (
        <CategoryPage
            mobile_api={handleProductToSearch()}
            data10={data10}
            data2={data2}
            data3={data3}
            data4={data4}
            data5={data5}
            data6={data6}
            data8={data8}
            data9={data9}
            slide_mobile={slide_mobile}
            category1="common"
            category2="landline"
            title="Mobile"
            slideStatus="none"
        />
    );
}

Search.propTypes = {};

export default Search;
