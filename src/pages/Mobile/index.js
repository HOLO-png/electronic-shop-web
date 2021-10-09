import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMobilesApi, mobilesSelector } from '../../Store/Reducer/mobile_api';
import {
    data1,
    data10,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    slide_mobile,
} from '../../assets/fake-data';
import CategoryPage from '../../Components/Product/Mobile/CategoryPage';

function Mobile(props) {
    const mobile_api = useSelector(mobilesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMobilesApi());
    }, [dispatch]);

    return (
        <CategoryPage
            mobile_api={mobile_api}
            data1={data1}
            data10={data10}
            data2={data2}
            data3={data3}
            data4={data4}
            data5={data5}
            data6={data6}
            data7={data7}
            data8={data8}
            data9={data9}
            slide_mobile={slide_mobile}
            category1="common"
            category2="landline"
            title="Mobile"
            slideStatus="block"
        />
    );
}

Mobile.propTypes = {};

export default Mobile;
