import React from 'react';
import PropTypes from 'prop-types';

function TotalCate(props) {
    const { order, comments_user, users } = props;
    return (
        <div className="col-xs-6">
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-teal panel-widget border-right">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-shopping-cart color-blue" />
                        <div className="large">{order.length}</div>
                        <div className="text-muted">New Orders</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-blue panel-widget border-right">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-comments color-orange" />
                        <div className="large">{comments_user.length}</div>
                        <div className="text-muted">Comments</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-orange panel-widget border-right">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-users color-teal" />
                        <div className="large">{users && users.length}</div>
                        <div className="text-muted">New Users</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 no-padding">
                <div className="panel panel-red panel-widget ">
                    <div className="row no-padding">
                        <em className="fa fa-xl fa-search color-red" />
                        <div className="large">{users && users.length + 1}</div>
                        <div className="text-muted">Page Views</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

TotalCate.propTypes = {};

export default TotalCate;
