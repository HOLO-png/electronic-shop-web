/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import TotalCate from './TotalCate';
import PercentProduct from './PercentProduct';
import Chart from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../Firebase/config';
import {
    commentsUserSelector,
    getCommentsAllApi,
} from '../../../Store/Reducer/comments_user';
import { useGetUsers } from '../../../Hooks/useGetUsers';

function DashboardMain(props) {
    const [order, setOrder] = useState([]);
    const dispatch = useDispatch();
    const comments_user = useSelector(commentsUserSelector);
    const users = useGetUsers();

    useEffect(() => {
        dispatch(getCommentsAllApi());
    }, [dispatch]);

    useEffect(() => {
        const unsubscribe = db
            .collection('orders')
            .onSnapshot((querySnapshot) => {
                const orders = [];
                querySnapshot.forEach((doc) => {
                    orders.push(doc.data());
                });
                setOrder(orders);
            });
        return unsubscribe;
    }, []);

    return (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
                <ol className="breadcrumb">
                    <li>
                        <a href="#">
                            <em className="fa fa-home" />
                        </a>
                    </li>
                    <li className="active">Dashboard</li>
                </ol>
            </div>
            {/*/.row*/}
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard</h1>
                </div>
            </div>
            {/*/.row*/}
            <div className="panel panel-container">
                <div className="row">
                    <TotalCate
                        order={order}
                        comments_user={comments_user}
                        users={users}
                    />
                    <PercentProduct />
                </div>
                <Chart />
                {/*/.row*/}
            </div>
        </div>
    );
}

DashboardMain.propTypes = {};

export default DashboardMain;
