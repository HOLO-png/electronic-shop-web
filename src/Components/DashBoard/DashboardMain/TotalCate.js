import React from 'react';
import PropTypes from 'prop-types';
import Count from '../../CountUp';

function TotalCate(props) {
    const { data1, data2, data3, data4 } = props;
    const arrayData = [data1, data2, data3, data4];

    return (
        <div className="col-xs-6">
            {arrayData.map((item) => (
                <div
                    className="col-xs-6 col-md-6 col-lg-6 no-padding"
                    key={item.icon}
                >
                    <div className="panel panel-teal panel-widget border-right">
                        <div className="row no-padding">
                            <em
                                className={`fa fa-xl ${item.icon} color-blue`}
                            />
                            <div className="large">
                                {item.data && item.data.length}
                            </div>
                            <div className="text-muted">{item.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

TotalCate.propTypes = {};

export default TotalCate;
