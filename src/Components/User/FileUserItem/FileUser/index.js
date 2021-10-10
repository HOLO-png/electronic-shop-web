import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button, Radio, Row, Col, DatePicker } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserApi,
    insertUserApi,
    updateUserApi,
    userApiSelector,
} from '../../../../Store/Reducer/userApi';
import UploadFileImg from './UploadFileImg';
import ChangePhoneNumber from './ChangePhoneNumber';
import { isEmptyObject } from '../../../../utils/checkEmptyObj';
import { isArray } from '../../../../utils/checkArray';
import {
    getUserItemApi,
    userItemApiSelector,
} from '../../../../Store/Reducer/getUserItemApi';

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
    .date-title {
        font-size: 16px;
        color: #969696;
        font-weight: 600;
        margin: 5px 10px;
    }
`;
const dateFormat = 'YYYY-MM-DD';

function FileUser(props) {
    const data = React.useContext(AuthContext);
    const dispatch = useDispatch();
    const users = useSelector(userApiSelector);
    const userItem = useSelector(userItemApiSelector);
    const [loadings, setLoadings] = useState(false);
    const [dataUser, setDataUser] = useState({
        name: '',
        email: '',
        sex: '',
        date_of_birth: '',
        number_phone: '',
        image: '',
    });
    const [user, setUser] = useState({});
    const { email, photoURL, uid, displayName } = data.user;

    useEffect(() => {
        uid && dispatch(getUserItemApi(uid));
        dispatch(getUserApi());
        setDataUser({ ...dataUser, email: email });
        handleInsertUserApi();
    }, [dispatch, uid]);

    const handleInsertUserApi = () => {
        users.forEach((user) => {
            if (user.id !== uid) {
                dispatch(
                    insertUserApi({
                        id: uid,
                        name: displayName,
                        email: email,
                        sex: '',
                        date_of_birth: '',
                        number_phone: '',
                        image: photoURL,
                    }),
                );
            }
        });
    };

    useEffect(() => {
        if (!isArray(userItem)) {
            Object.keys(userItem).length !== 0 && setUser(userItem);
        }
    }, [userItem]);

    console.log(users);
    console.log(userItem);

    const enterLoading = () => {
        setLoadings(true);
        setTimeout(() => {
            dispatch(
                updateUserApi({
                    id: uid,
                    ...dataUser,
                }),
            );
            setDataUser({
                name: '',
                email: '',
                sex: '',
                date_of_birth: '',
                number_phone: '',
                image: '',
            });
            setLoadings(false);
        }, 2000);
    };

    const onChangeDate = (date, dateString) => {
        setDataUser({ ...dataUser, date_of_birth: dateString });
    };

    const onChangeSex = (e) => {
        setDataUser({ ...dataUser, sex: e.target.value });
    };

    const onChangeInputName = (e) => {
        setDataUser({ ...dataUser, name: e.target.value });
    };

    const importImg = (img) => {
        setDataUser({ ...dataUser, image: img });
    };

    const onChangePhoneNumber = (e) => {
        setDataUser({ ...dataUser, number_phone: e.target.value });
    };

    console.log(user.date_of_birth);

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
                                <p className="user-name">{user.name}</p>
                            </Form.Item>
                            <Form.Item label="Tên">
                                <Input
                                    onChange={onChangeInputName}
                                    placeholder="Nhập đầy đủ họ tên..."
                                />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input value={user.email} />
                            </Form.Item>
                            <Form.Item label="Tên Shop">
                                <Input
                                    defaultValue="Vo Danh Shop"
                                    value={user.name + ' SHOP'}
                                    placeholder="Nhập tên Shop"
                                />
                            </Form.Item>

                            <ChangePhoneNumber
                                user={user}
                                onChangePhoneNumber={onChangePhoneNumber}
                            />
                            <Form.Item label="Ngày Sinh">
                                <DatePicker onChange={onChangeDate} />
                                {!dataUser.date_of_birth ? (
                                    <p className="date-title">
                                        {user.date_of_birth}
                                    </p>
                                ) : (
                                    ''
                                )}
                            </Form.Item>

                            <Form.Item label="Giới Tính">
                                <Radio.Group
                                    onChange={onChangeSex}
                                    value={dataUser.sex}
                                    defaultValue="orther"
                                >
                                    <Radio value={'male'}>Nam</Radio>
                                    <Radio value={'female'}>Nữ</Radio>
                                    <Radio value={'orther'}>Khác</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Button
                                type="primary"
                                loading={loadings}
                                onClick={enterLoading}
                                size="large"
                                icon={<SaveOutlined />}
                                style={{ marginLeft: '144px' }}
                                disabled={isEmptyObject(dataUser)}
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
                        use_api={userItem}
                        importImg={importImg}
                    />
                </Col>
            </Row>
        </FileUserContent>
    );
}

FileUser.propTypes = {};

export default FileUser;
