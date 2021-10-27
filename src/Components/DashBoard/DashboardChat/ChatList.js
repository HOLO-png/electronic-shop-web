import React from 'react';
import PropTypes from 'prop-types';
import ChatItem from './ChatItem';

function ChatList(props) {
    return (
        <ul>
            <ChatItem activeClass={true} />
            <ChatItem activeClass={false} />
            <ChatItem activeClass={false} />
        </ul>
    );
}

ChatList.propTypes = {};

export default ChatList;
