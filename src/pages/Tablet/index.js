import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    data1_03,
    data10,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7_03,
    data8,
    data9,
    slide_mobile,
} from '../../assets/fake-data';
import CategoryPage from '../../Components/Product/Mobile/CategoryPage';
import { getTabletsApi, tabletsSelector } from '../../Store/Reducer/tablet_api';

function Tablet(props) {
    const mobile_api = useSelector(tabletsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTabletsApi());
    }, [dispatch]);

    return (
        <CategoryPage
            mobile_api={mobile_api}
            data1={data1_03}
            data10={data10}
            data2={data2}
            data3={data3}
            data4={data4}
            data5={data5}
            data6={data6}
            data7={data7_03}
            data8={data8}
            data9={data9}
            category1="tablet"
            category2="new"
            slide_mobile={slide_mobile}
            title="Tablet"
            slideStatus="block"
        />
    );
}

Tablet.propTypes = {};

export default Tablet;
