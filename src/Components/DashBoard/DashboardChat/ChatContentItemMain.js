import React from 'react';
import PropTypes from 'prop-types';

function ChatContentItemMain(props) {
    const { con } = props;
    return (
        <div className="row">
            <li class="left clearfix-chat-content-item">
                <div className="col-lg-3"></div>
                <div className="col-lg-9 comment-main">
                    <p>{con.message}</p>
                </div>
            </li>
        </div>
    );
}

ChatContentItemMain.propTypes = {};

export default ChatContentItemMain;
