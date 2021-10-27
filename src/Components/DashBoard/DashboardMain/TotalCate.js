import React from 'react';
import PropTypes from 'prop-types';

function TotalCate(props) {
    return (
        <div className="col-xs-6">
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-teal panel-widget border-right">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-shopping-cart color-blue" />
                        <div className="large">120</div>
                        <div className="text-muted">New Orders</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-blue panel-widget border-right">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-comments color-orange" />
                        <div className="large">52</div>
                        <div className="text-muted">Comments</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-orange panel-widget border-right">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-users color-teal" />
                        <div className="large">24</div>
                        <div className="text-muted">New Users</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-red panel-widget ">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-search color-red" />
                        <div className="large">25.2k</div>
                        <div className="text-muted">Page Views</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

TotalCate.propTypes = {};

export default TotalCate;
