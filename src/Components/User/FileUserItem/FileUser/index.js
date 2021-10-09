import React, { useEffect, useState } from 'react';
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
    message,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { SaveOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserApi,
    insertUserApi,
    userApiSelector,
} from '../../../../Store/Reducer/userApi';
import UploadFileImg from './UploadFileImg';

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

function FileUser(props) {
    const data = React.useContext(AuthContext);
    const dispatch = useDispatch();
    const use_api = useSelector(userApiSelector);
    const [loadings, setLoadings] = useState(false);
    const [sex, setSex] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [value, setValue] = useState(1);
    const [img, setImg] = useState(null);
    const { email, photoURL, uid, displayName } = data.user;

    useEffect(() => {
        dispatch(getUserApi());
        dispatch(
            insertUserApi({
                id: uid,
                name: displayName,
                email: email,
                sex: sex,
                date_of_birth: dateOfBirth,
                number_phone: numberPhone,
                image: photoURL,
            }),
        );
    }, [dateOfBirth, data.user]);

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

    console.log(data.user);

    const importImg = (img) => {
        setImg(img);
    };
    console.log(img);

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
                        >
                            <Form.Item
                                label="Tên Đăng Nhập"
                                style={{ margin: 0, fontSize: '16px' }}
                            >
                                <p className="user-name">{displayName}</p>
                            </Form.Item>
                            <Form.Item label="Tên">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input value={email} />
                            </Form.Item>
                            <Form.Item label="Tên Shop">
                                <Input
                                    value={displayName}
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
                                disabled
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
                    <UploadFileImg
                        photoURL={photoURL}
                        use_api={use_api}
                        importImg={importImg}
                    />
                </Col>
            </Row>
        </FileUserContent>
    );
}

FileUser.propTypes = {};

export default FileUser;
