import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';

function ProductLike(props) {
    const { loading } = props;
    const [hearl, setHearl] = useState(false);

    const renderHearlActive = () =>
        !hearl ? (
            <i className="fal fa-heart" onClick={() => setHearl(!hearl)}></i>
        ) : (
            <i className="fas fa-heart" onClick={() => setHearl(!hearl)}></i>
        );
    return (
        <>
            {loading ? (
                <Skeleton.Button
                    active={true}
                    size="large"
                    shape="default"
                    block={false}
                    style={{ width: 140 }}
                />
            ) : (
                <div className="product-like">
                    {renderHearlActive()}
                    <p className="product-cmt">
                        {hearl ? 'Đã Thích' : 'Thích'} (2,5k)
                    </p>
                </div>
            )}
        </>
    );
}

ProductLike.propTypes = {};

export default ProductLike;
