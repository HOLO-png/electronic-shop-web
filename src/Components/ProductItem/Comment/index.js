import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Paginations from './Pagination/index';
import { Comment, Avatar, Form, Button, Input, Rate } from 'antd';
import moment from 'moment';
import UploadItem from './Upload';
import CommentItem from './CommentItem';
import { desc } from '../../../assets/fake-data';
import { renderPhotoAccout } from '../../../utils/avartarChange';
const { TextArea } = Input;

const Editor = ({
    onChange,
    onSubmit,
    submitting,
    value,
    star,
    handleChangeStar,
    importImg,
    img,
    video,
    user,
}) => (
    <>
        {console.log(value)}
        <p className="comment_author-name">{user.displayName}</p>
        <Rate tooltips={desc} onChange={handleChangeStar} value={star} />
        {star ? <span className="ant-rate-text">{desc[star - 1]}</span> : ''}
        <Form.Item>
            <TextArea
                rows={4}
                onChange={onChange}
                value={value}
                placeholder="Nhập bình luận của bạn..."
            />
        </Form.Item>
        <UploadItem importImg={importImg} img={img} video={video} />
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
function Comments(props) {
    const { commentsUser, product, handleInSertCmt, handleComments, user } =
        props;
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [star, setStar] = useState(0);
    const [img, setimg] = useState([]);
    const [video, setvideo] = useState([]);

    useEffect(() => {
        setComments(commentsUser);
    }, [commentsUser]);

    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setStar(0);
            setimg([]);
            setvideo([]);
            handleInSertCmt({
                star: star,
                id_product: product.id,
                id_user: user.id,
                like: 0,
                dislike: 0,
                type_product: 'Điện Thoại Vsmast Joy 4 - Hàng Chính Hãng',
                author: user.displayName,
                avatar: user.photoURL,
                content: value,
                datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                orther: {
                    image: img,
                    video: video,
                },
                cmt_item: [],
            });
        }, 1000);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleChangeStar = (value) => {
        setStar(value);
    };

    const importImg = (img) => {
        img.forEach((element) => {
            if (element.type === 'video/mp4') {
                setvideo([element]);
            } else {
                setimg([element]);
            }
        });
    };
    return (
        <>
            <Comment
                avatar={renderPhotoAccout(user.photoURL, 30, user.displayName)}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                        star={star}
                        handleChangeStar={handleChangeStar}
                        importImg={importImg}
                        img={img}
                        video={video}
                        user={user}
                    />
                }
            />
            <CommentItem
                comments={comments}
                handleComments={handleComments}
                user={user}
            />
            <Paginations />
            <br />
        </>
    );
}

Comments.propTypes = {};

export default Comments;
