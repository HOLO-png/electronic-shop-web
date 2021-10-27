import React from 'react';
import PropTypes from 'prop-types';

function ChatContentItemMain(props) {
    return (
        <div className="row">
            <li class="left clearfix-chat-content-item">
                <div className="col-lg-3"></div>
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

ChatContentItemMain.propTypes = {};

export default ChatContentItemMain;
