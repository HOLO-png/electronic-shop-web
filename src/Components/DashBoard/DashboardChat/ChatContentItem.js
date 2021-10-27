import React from 'react';
import PropTypes from 'prop-types';

function ChatContentItem(props) {
    return (
        <div className="row">
            <li class="left clearfix-chat-content-item">
                <div className="col-lg-1">
                    <span class="chat-img pull-left">
                        <img
                            src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-deo-kinh-1.jpg"
                            alt="User Avatar"
                            class="img-circle"
                        />
                    </span>
                </div>
                <div className="col-lg-9">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ante turpis, rutrum ut ullamcorper sed, dapibus ac
                        nunc.
                    </p>
                </div>
            </li>
        </div>
    );
}

ChatContentItem.propTypes = {};

export default ChatContentItem;
