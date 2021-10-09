import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Paginations from './Pagination/index';
import { Comment, Avatar, Form, Button, Input, Rate } from 'antd';
import moment from 'moment';
import UploadItem from './Upload';
import CommentItem from './CommentItem';
import { desc } from '../../../assets/fake-data';
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
}) => (
    <>
        <p className="comment_author-name">Bùi Hoàng Long</p>
        <Rate tooltips={desc} onChange={handleChangeStar} defaultValue={star} />
        {star ? <span className="ant-rate-text">{desc[star - 1]}</span> : ''}
        <Form.Item>
            <TextArea
                rows={4}
                onChange={onChange}
                defaultValue={value}
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
    const { commentsUser, product, handleInSertCmt, handleComments } = props;
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
                id_user: 'BHL190101',
                address:
                    'Thôn Xuân Quý - Xã Tam Thăng - Tp Tam kỳ - tỉnh Quảng Nam',
                like: 0,
                dislike: 0,
                type_product: 'Điện Thoại Vsmast Joy 4 - Hàng Chính Hãng',
                author: 'Bui Hoang Long',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
                        star={star}
                        handleChangeStar={handleChangeStar}
                        importImg={importImg}
                        img={img}
                        video={video}
                    />
                }
            />
            <CommentItem comments={comments} handleComments={handleComments} />
            <Paginations />
            <br />
        </>
    );
}

Comments.propTypes = {};

export default Comments;
