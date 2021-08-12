import React, { createElement, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Comment,
    Avatar,
    Form,
    Button,
    Input,
    Rate,
    Tooltip,
    Pagination,
} from 'antd';
import moment from 'moment';
import {
    DislikeFilled,
    DislikeOutlined,
    LikeFilled,
    LikeOutlined,
} from '@ant-design/icons';
import UploadItem from './Upload';
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Rate />
        <Form.Item>
            <TextArea
                rows={4}
                onChange={onChange}
                value={value}
                placeholder="Nhập bình luận của bạn..."
            />
        </Form.Item>
        <UploadItem />
        <Form.Item>
            <Button
                htmlType="submit"
                loading={submitting}
                onClick={onSubmit}
                type="primary"
                style={{ color: '#fff' }}
            >
                Add Comment
            </Button>
        </Form.Item>
    </>
);
function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}
function Comments(props) {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [star, setStar] = useState(0);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [pagina, setPagina] = useState(false);

    const CommentList = ({ comments }) =>
        comments.map((item, key) => (
            <Comment
                actions={actions}
                author={<a>{item.author}</a>}
                avatar={<Avatar src={item.avatar} alt={item.author} />}
                content={item.content}
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{item.datetime}</span>
                    </Tooltip>
                }
            />
        ));

    const handleSubmit = () => {
        if (!value) {
            return;
        }

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    star: star,
                    type_product: 'Bamboo - Tre',
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: <p>{value}</p>,
                    datetime: moment().fromNow(),
                },
            ]);
        }, 1000);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleChangeStar = (e) => {
        setStar(e.target.value);
    };
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    const actions = [
        <Tooltip key="comment-basic-Star" title="Star">
            <span onClick={star}>
                <Rate defaultValue={5} disabled />
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(
                    action === 'disliked' ? DislikeFilled : DislikeOutlined,
                )}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];
    return (
        <>
            <Comment
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
            {comments.length > 0 && <CommentList comments={comments} />}
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
                style={{ padding: '20px', marginLeft: '30%' }}
            />
            <br />
        </>
    );
}

Comments.propTypes = {};

export default Comments;
