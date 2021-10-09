import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Rate, Tooltip } from 'antd';
import {
    DislikeFilled,
    DislikeOutlined,
    LikeFilled,
    LikeOutlined,
} from '@ant-design/icons';

function Actions(props) {
    const { item, handleStatus } = props;
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = (like) => {
        likes <= like ? setLikes(likes + 1) : setLikes(likes);
        // eslint-disable-next-line no-unused-expressions
        action === 'disliked' ? setDislikes(dislikes - 1) : '';
        setAction('liked');
    };

    const dislike = (dislike) => {
        dislikes <= dislike ? setDislikes(dislikes + 1) : setDislikes(dislikes);
        // eslint-disable-next-line no-unused-expressions
        action === 'liked' ? setLikes(likes - 1) : '';
        setAction('disliked');
    };

    return [
        <Tooltip key="comment-basic-Star" title="Star">
            <span className="comment-star" style={{ marginRight: '20px' }}>
                <Rate defaultValue={item.star} disabled />
            </span>
        </Tooltip>,
        <div style={{ marginRight: '20px' }} key={1}>
            <Tooltip key="comment-basic-like" title="Like">
                <span
                    onClick={() => like(item.like)}
                    style={{ marginRight: '7px', cursor: 'pointer' }}
                >
                    {React.createElement(
                        action === 'liked' ? LikeFilled : LikeOutlined,
                    )}
                    <span className="comment-action">{likes ? likes : 0}</span>
                </span>
            </Tooltip>
            <Tooltip key="comment-basic-dislike" title="Dislike">
                <span
                    onClick={() => dislike(item.dislike)}
                    style={{ cursor: 'pointer' }}
                >
                    {React.createElement(
                        action === 'disliked' ? DislikeFilled : DislikeOutlined,
                    )}
                    <span className="comment-action">
                        {dislikes ? dislikes : 0}
                    </span>
                </span>
            </Tooltip>
        </div>,
        <Button key="comment-basic-reply-to" type="link" onClick={handleStatus}>
            Reply to
        </Button>,
    ];
}

Actions.propTypes = {};

export default Actions;
