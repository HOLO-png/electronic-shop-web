/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import OverviewChart from './OverviewChart';
import { Progress } from 'antd';
import TotalCate from './TotalCate';
import PercentProduct from './PercentProduct';
import Chart from './Chart';

function DashboardMain(props) {
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
                    <TotalCate />
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
