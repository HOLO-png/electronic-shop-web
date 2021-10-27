import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar } from 'antd';

function AvatarInfo(props) {
    const { admin } = props;
    return (
        <div className="profile-sidebar">
            <div className="profile-userpic">
                <Avatar
                    src={admin.photoURL}
                    className="img-responsive"
                    alt=""
                />
            </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name">
                    {admin.displayName}
                </div>
                <div className="profile-usertitle-status">
                    <span className="indicator label-success" />
                    Online
                </div>
            </div>
            <div className="clear" />
        </div>
    );
}

AvatarInfo.propTypes = {};

export default AvatarInfo;
