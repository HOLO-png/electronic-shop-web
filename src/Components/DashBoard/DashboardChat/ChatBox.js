import React from 'react';
import PropTypes from 'prop-types';

function ChatBox(props) {
    return (
        <div className="row chat-box-active">
            <div className="col-lg-8">
                <div className="col-lg-2" style={{ marginTop: 8 }}>
                    <span class="chat-img pull-left">
                        <img
                            src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-deo-kinh-1.jpg"
                            alt="User Avatar"
                            class="img-circle"
                        />
                    </span>
                </div>
                <div className="col-lg-9">
                    <div class="chat-body clearfix">
                        <div class="clearfix-header">
                            <strong class="primary-font">John Doe</strong>
                            <br />
                            <small class="text-muted">32 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-1">
                <i className="fas fa-phone"></i>
            </div>
            <div className="col-lg-1">
                <i className="fad fa-video"></i>
            </div>
            <div className="col-lg-1">
                <i className="fad fa-filter"></i>
            </div>
        </div>
    );
}

ChatBox.propTypes = {};

export default ChatBox;
