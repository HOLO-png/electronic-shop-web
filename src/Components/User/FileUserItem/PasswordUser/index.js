import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Form,
    Input,
    Button,
    Radio,
    Row,
    Col,
    DatePicker,
    Upload,
    InputNumber,
    Divider,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';

const FileUserContent = styled.div`
    span.ant-divider-inner-text {
        font-size: 13px;
        color: #cbcbcb;
    }
    .file-user-title {
        margin-left: 40px;
    }
    .file-user-name {
        font-size: 23px;
        margin: 0;
    }
    .file-user-des {
        font-weight: 300;
        color: #aeaeae;
    }
    .user-name {
        margin: 0;
    }
    .ant-row {
        justify-content: center;
    }
    .ant-row {
        margin: 7px 0;
    }
`;
const FileUserFormPassWord = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
function PasswordUser(props) {
    const [loadings, setLoadings] = useState(false);

    const [value, setValue] = useState(1);
    const enterLoading = () => {
        setLoadings(true);
        setTimeout(() => {
            setLoadings(false);
        }, 2000);
    };
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <FileUserContent>
            <div className="file-user-title">
                <p className="file-user-name">Đổi Mật Khẩu</p>
                <p className="file-user-des">
                    Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho
                    người khác
                </p>
            </div>
            <Divider
                orientation="left"
                style={{ transform: 'translateY(-10px)' }}
            >
                Change Password
            </Divider>
            <FileUserFormPassWord>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ width: '100%' }}
                >
                    <Col className="gutter-row" span={16}>
                        <div className="file-user-content">
                            <Form
                                labelCol={{
                                    span: 6,
                                }}
                                wrapperCol={{
                                    span: 18,
                                }}
                                layout="horizontal"
                                size="large"
                                // onValuesChange={onFormLayoutChange}
                            >
                                <Form.Item
                                    label="Mật Khẩu Hiện Tại"
                                    style={{ margin: 0, fontSize: '16px' }}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Mật Khẩu Mới">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Xác Nhận Mật Khẩu">
                                    <Input />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="link">Quên mật khẩu</Button>
                                </Form.Item>
                                <Button
                                    type="primary"
                                    loading={loadings}
                                    onClick={enterLoading}
                                    size="large"
                                    icon={<SaveOutlined />}
                                    style={{ marginLeft: '144px' }}
                                >
                                    Xác Nhận
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </FileUserFormPassWord>
        </FileUserContent>
    );
}

PasswordUser.propTypes = {};

export default PasswordUser;
