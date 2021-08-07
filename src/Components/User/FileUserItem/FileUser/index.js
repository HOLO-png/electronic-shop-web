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
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';

const FileUserContent = styled.div`
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
    .ant-row.ant-form-item {
        margin: 10px;
    }
`;
const FileUserEdit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;
function FileUser(props) {
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
                <p className="file-user-name">Hồ Sơ Của Tôi</p>
                <p className="file-user-des">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                </p>
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                                label="Tên Đăng Nhập"
                                style={{ margin: 0, fontSize: '16px' }}
                            >
                                <p className="user-name">Bui Hoang Long</p>
                            </Form.Item>
                            <Form.Item label="Tên">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input value="wwwlong91@gmail.com" />
                            </Form.Item>
                            <Form.Item label="Tên Shop">
                                <Input
                                    value="Bui Hoang Long"
                                    placeholder="Nhập tên Shop"
                                />
                            </Form.Item>
                            <Form.Item label="Số Điện thoại" type="number">
                                <Button type="link">Thêm</Button>
                            </Form.Item>
                            <Form.Item label="Ngày Sinh">
                                <DatePicker onChange={onChange} />
                            </Form.Item>

                            <Form.Item label="Giới Tính">
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={1}>Nam</Radio>
                                    <Radio value={2}>Nữ</Radio>
                                    <Radio value={3}>Khác</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Button
                                type="primary"
                                loading={loadings}
                                onClick={enterLoading}
                                size="large"
                                icon={<SaveOutlined />}
                                style={{ marginLeft: '144px' }}
                            >
                                Lưu
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col
                    className="gutter-row"
                    span={8}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <FileUserEdit className="file-user-edit">
                        <Avatar size="large" size={150} />
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Chọn Ảnh</Button>
                        </Upload>
                        ,<p>Dụng lượng file tối đa 1 MB</p>
                        <p>Định dạng:.JPEG, .PNG</p>
                    </FileUserEdit>
                </Col>
            </Row>
        </FileUserContent>
    );
}

FileUser.propTypes = {};

export default FileUser;
