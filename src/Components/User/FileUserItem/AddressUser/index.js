import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button, Row, Col, Divider, Tag, Cascader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import TextArea from 'antd/lib/input/TextArea';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import SelecteValue from '../../../Pay/DeliveryAddress/ModalAddress/SelecteValue';
import {
    addressApiSelector,
    getAddressApi,
} from '../../../../Store/Reducer/apiAddress';
import {
    addressUserApiSelector,
    getAddressUserApi,
    insertAddressUserApi,
} from '../../../../Store/Reducer/addressUserApi';

const FileUserAddress = styled.div`
    display: flex;
    flex-direction: column;
    span.ant-divider-inner-text {
        font-size: 13px;
        color: #cbcbcb;
    }
   
}
`;
const FileUserTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p.file-user-address-title {
        font-size: 20px;
        margin: 0;
    }
    .ant-modal-header {
        font-size: 22px;
    }
`;
const FileUserInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 30px;
    p {
        margin-left: 10px;
        margin-bottom: 0;
        font-size: larger;
        color: #333;
    }
    label {
        color: #878787;
    }
    span.ant-tag.ant-tag-green {
        padding: 3px 15px;
        font-size: 15px;
        margin-left: 10px;
    }
    .ant-form-item-control-input-content {
        display: flex;
    }
`;
function AddressUser(props) {
    const data = React.useContext(AuthContext);
    const dispatch = useDispatch();
    const address_api = useSelector(addressApiSelector);
    const address_user_api = useSelector(addressUserApiSelector);
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState(1);
    const [nameUser, setNameUser] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [objAddress, setObjAddress] = useState({});

    const { uid } = data.user;

    useEffect(() => {
        dispatch(getAddressUserApi());
    }, [dispatch]);

    console.log('dia chi', address_user_api);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onChangeName = (e) => {
        setNameUser(e.target.value);
    };

    const onChangeNumberPhone = (e) => {
        setNumberPhone(e.target.value);
    };

    const setModal1Visible = (modal1Visible) => {
        setModal(modal1Visible);
        dispatch(getAddressApi());
    };

    const onHandleValueImportAddress = (obj) => {
        setObjAddress(obj);
    };

    const handleImportAddressUser = () => {
        const addressUserObj = {
            ...objAddress,
            id_user: uid,
            name_user: nameUser,
            number_phone: numberPhone,
        };
        setModal(false);
        dispatch(insertAddressUserApi(addressUserObj));
    };
    return (
        <FileUserAddress>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginBottom: '20px' }}
            >
                <Col
                    className="gutter-row"
                    span={24}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                    }}
                >
                    <FileUserTitle>
                        <p className="file-user-address-title">
                            Thẻ Tín Dụng / Thẻ Ghi Nợ
                        </p>
                        <Button
                            type="primary"
                            size="large"
                            icon={<PlusOutlined />}
                            onClick={() => setModal1Visible(true)}
                        >
                            Thêm Địa Chỉ Mới
                        </Button>
                        <Modal
                            title="Địa chỉ mới"
                            centered
                            style={{ top: 20 }}
                            visible={modal}
                            onOk={() => handleImportAddressUser()}
                            onCancel={() => setModal1Visible(false)}
                        >
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
                                    label="Họ và Tên"
                                    style={{ margin: 0, fontSize: '16px' }}
                                >
                                    <Input
                                        placeholder="Họ và tên"
                                        onChange={onChangeName}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Số điện thoại"
                                    style={{ margin: 0 }}
                                >
                                    <Input
                                        placeholder="Số điện thoại"
                                        onChange={onChangeNumberPhone}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Địa Chỉ"
                                    style={{ margin: 0 }}
                                >
                                    <SelecteValue
                                        active={1}
                                        address_api={address_api}
                                        onHandleValueImportAddress={
                                            onHandleValueImportAddress
                                        }
                                        widthInput="160px"
                                    />
                                </Form.Item>

                                <Form.Item label="Loại Địa Chỉ">
                                    <Button
                                        type="dashed"
                                        style={{ margin: '10px 10px' }}
                                        disabled
                                    >
                                        Nhà Riêng
                                    </Button>
                                    <Button type="dashed" disabled>
                                        Văn Phòng
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </FileUserTitle>
                </Col>
            </Row>
            <Divider
                orientation="left"
                style={{ transform: 'translateY(-30px)' }}
            >
                Address User
            </Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                    className="gutter-row"
                    span={18}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        minHeight: '250px',
                        flexDirection: 'column',
                        height: 'auto',
                    }}
                >
                    <FileUserInfo>
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
                                style={{
                                    margin: 0,
                                    display: 'flex',
                                }}
                            >
                                <p className="user-name">
                                    {address_user_api[0].name_user}
                                </p>
                                <Tag color="green">Mặc Định</Tag>
                            </Form.Item>

                            <Form.Item
                                label="Số Điện Thoại"
                                style={{ margin: 0 }}
                            >
                                <p className="user-name">
                                    (+84) {address_user_api[0].number_phone}
                                </p>
                            </Form.Item>
                            <Form.Item label="Địa Chỉ">
                                <p className="user-name">
                                    {address_user_api[0].mota} ~{' '}
                                    {address_user_api[0].xa} ~{' '}
                                    {address_user_api[0].quan} ~{' '}
                                    {address_user_api[0].tinh}
                                </p>
                            </Form.Item>
                        </Form>
                    </FileUserInfo>
                </Col>
                <Col
                    className="gutter-row"
                    span={6}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                    }}
                >
                    <FileUserInfo>
                        <div className="btn-group">
                            <Button type="dashed">Sửa</Button>
                            <Button
                                type="dashed"
                                danger
                                style={{ marginLeft: '10px' }}
                            >
                                Xoá
                            </Button>
                        </div>
                    </FileUserInfo>
                </Col>
            </Row>
        </FileUserAddress>
    );
}

AddressUser.propTypes = {};

export default AddressUser;
