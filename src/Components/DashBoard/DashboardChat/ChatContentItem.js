import React from 'react';
import PropTypes from 'prop-types';
import { renderPhotoAccout } from '../../../utils/avartarChange';

function ChatContentItem(props) {
    const { con, chatUser } = props;
    return (
        <div className="row">
            <li class="left clearfix-chat-content-item">
                <div className="col-lg-">
                    <span class="chat-img pull-left" style={{ marginLeft: 20 }}>
                        {renderPhotoAccout(
                            chatUser.photoURL,
                            30,
                            chatUser.displayName,
                        )}
                    </span>
                </div>
                <div className="col-lg-14" style={{ justifyContent: 'start' }}>
                    <p>{con.message}</p>
                </div>
            </li>
        </div>
    );
}

ChatContentItem.propTypes = {};

export default ChatContentItem;
