import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { Button, Form } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const Edit = styled.div`
    input.input-cmt-product-chidlren {
        outline: none;
        border: none;
        border-bottom: 1px dotted;
        width: 400px;
    }
`;

function EditItem(props) {
    const {
        idAuthor,
        handleSetIndex,
        handleComments,
        itemParent,
        handleSetActiveCmt,
    } = props;
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [cmt_user, setCmt_user] = useState({});

    useEffect(() => {
        setCmt_user(itemParent);
    }, [itemParent]);

    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true);

        let cmt_content = { ...cmt_user, cmt_item: [...cmt_user.cmt_item] };

        cmt_content.cmt_item.unshift({
            id_user: 'BTN_DWA0192',
            id_author: idAuthor,
            Address:
                'Thôn Xuân Quý - Xã Tam Thăng - Tp Tam kỳ - tỉnh Quảng Nam',
            like: 0,
            dislike: 0,
            type_product: 'Điện Thoại Vsmast Joy 4 - Hàng Chính Hãng',
            author: 'Bui Hoang Long',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: value,
            datetime: moment().fromNow(),
        });

        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            handleSetIndex(null);
            handleComments(cmt_content);
        }, 1000);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Edit>
            <p className="comment_author-name">Bùi Hoàng Long</p>
            <Form.Item>
                <input
                    className="input-cmt-product-chidlren"
                    placeholder="Phản hồi công khai..."
                    onChange={handleChange}
                    defaultValue={value}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type=""
                    style={{ color: '#333', marginLeft: 200 }}
                    onClick={handleSetActiveCmt}
                >
                    Huỷ
                </Button>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={handleSubmit}
                    type="primary"
                    disabled={value ? false : true}
                    style={{ color: '#333', marginLeft: 20 }}
                >
                    Add Comment
                </Button>
            </Form.Item>
        </Edit>
    );
}

EditItem.propTypes = {};

export default EditItem;
