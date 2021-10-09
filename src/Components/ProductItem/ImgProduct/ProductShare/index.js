import React from 'react';
import PropTypes from 'prop-types';
import { APP_SHARE } from '../../../../assets/fake-data/app-share';
import Avatar from 'antd/lib/avatar/avatar';
import { Skeleton } from 'antd';
import { openNotification } from '../../../../utils/messageAlear';

function ProductShare(props) {
    const { loading } = props;

    const handleChangeShare = () => {
        openNotification(
            'Xin lỗi!',
            'Chức năng này tui chưa làm nên lướt chỗ khác đi nha',
        );
    };
    const renderAppShare = () =>
        APP_SHARE.map((item, i) => (
            <Avatar
                size="small"
                src={item.img}
                key={i}
                title={item.title}
                onClick={handleChangeShare}
            />
        ));

    return (
        <>
            {loading ? (
                <Skeleton.Button
                    active={true}
                    size="large"
                    shape="default"
                    block={false}
                    style={{ width: 140, marginRight: 150 }}
                />
            ) : (
                <div className="product-share">
                    <p>Chia Sẻ:</p>
                    <div className="product-app-share">{renderAppShare()}</div>
                </div>
            )}
        </>
    );
}

ProductShare.propTypes = {};

export default ProductShare;
