import React from 'react';
import PropTypes from 'prop-types';

function ChatItem(props) {
    const { activeClass } = props;
    return (
        <div className={activeClass ? 'row active-chat' : 'row'}>
            <li class="left clearfix">
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
                            <strong class="primary-font">John Doe</strong>{' '}
                            <small class="text-muted">32 mins ago</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla ante turpis, rutrum ut ullamcorper sed,
                            dapibus ac nunc.
                        </p>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div className="box-alear"></div>
                </div>
            </li>
        </div>
    );
}

ChatItem.propTypes = {};

export default ChatItem;
