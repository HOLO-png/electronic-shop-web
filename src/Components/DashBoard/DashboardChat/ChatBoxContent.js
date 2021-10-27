import React from 'react';
import PropTypes from 'prop-types';
import ChatContentItem from './ChatContentItem';
import ChatContentItemMain from './ChatContentItemMain';

function ChatBoxContent(props) {
    return (
        <div className="row chat-content">
            <ChatContentItem />
            <ChatContentItem />
            <ChatContentItemMain />
            <ChatContentItem />
            <ChatContentItem />
            <ChatContentItem />
            <ChatContentItemMain />
            <ChatContentItem />
            <ChatContentItem />
            <ChatContentItem />
            <ChatContentItemMain />
            <ChatContentItem />
            <ChatContentItemMain />
        </div>
    );
}

ChatBoxContent.propTypes = {};

export default ChatBoxContent;
