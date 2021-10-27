import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from '../../Components/Helmet';
import DashboardHeader from '../../Components/DashBoard/DashboardHeader';
import DashboardSideBar from '../../Components/DashBoard/DashboardSideBar';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import DashboardItemLayout from '../../Common/DashboardItemLayout';
import { DASHBOARD_ROUTES } from '../../constans';
import { AuthContext } from '../../Context/AuthProvider';

const renderDashboardRender = () => {
    let xhtml = null;
    xhtml = DASHBOARD_ROUTES.map((route, index) => {
        return (
            <DashboardItemLayout
                name={route.name}
                key={index}
                component={route.component}
                exact={route.exact}
                path={route.path}
            />
        );
    });
    return xhtml;
};

function DashBoard(props) {
    const data = useContext(AuthContext);
    return (
        <Helmet title="dashboard">
            <div className="dashboard">
                <DashboardHeader />
                <DashboardSideBar admin={data.user} />
                <Switch>{renderDashboardRender()}</Switch>
            </div>
        </Helmet>
    );
}

DashBoard.propTypes = {};

export default DashBoard;
