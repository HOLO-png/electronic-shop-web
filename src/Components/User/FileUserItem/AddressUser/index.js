import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button, Row, Col, Divider, Empty } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import SelecteValue from '../../../Pay/DeliveryAddress/ModalAddress/SelecteValue';
import {
    addressApiSelector,
    getAddressApi,
} from '../../../../Store/Reducer/apiAddress';

import AddressContentBox from './AddressContentBox';
import { isEmptyObjectAll } from '../../../../utils/checkEmptyObjAll';
import { toast } from 'react-toastify';
import firebase from '../../../../Firebase/config';
import uuid from 'lodash';

const FileUserAddress = styled.div`
    display: flex;
    flex-direction: column;

    span.ant-divider-inner-text {
        font-size: 13px;
        color: #cbcbcb;
    }
    .address-content {
        max-height: 300px;
        overflow-y: auto;
    }
    .address-title {
        height: 85px;
    box-shadow: 2px 2px 10px 0px #ececec;
    padding: 20px;
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

function AddressUser(props) {
    const data = React.useContext(AuthContext);
    const user = firebase.auth().currentUser;
    const dispatch = useDispatch();
    var db = firebase.firestore();
    const address_api = useSelector(addressApiSelector);
    const [modal, setModal] = useState(false);
    const [nameUser, setNameUser] = useState('');
    const [dataAddress, setDataAddress] = useState({});
    const [numberPhone, setNumberPhone] = useState('');
    const [objAddress, setObjAddress] = useState({
        tinh: '',
        quan: '',
        xa: '',
        mota: '',
    });

    const { id } = data.user;

    useEffect(() => {
        dispatch(getAddressApi());
    }, [dispatch]);

    const onChangeName = (e) => {
        setNameUser(e.target.value);
    };

    const onChangeNumberPhone = (e) => {
        setNumberPhone(e.target.value);
    };

    const handleSetDefaultToAddress = (obj) => {
        if (user === null) {
            return;
        }
        db.collection('users')
            .doc(id)
            .update({
                ...data.user,
                address: changeAddressToObjActive(data.user.address, obj),
            })
            .then(() => {})
            .catch((error) => {});
    };

    const changeAddressToObjActive = (array, obj) => {
        return array.map(function (item) {
            return item.id === obj.id
                ? { ...obj, status: true }
                : { ...item, status: false };
        });
    };

    const setModal1Visible = (modal1Visible) => {
        setModal(modal1Visible);
    };

    const onHandleValueImportAddress = (obj) => {
        setObjAddress(obj);
    };

    useEffect(() => {
        const addressUserObj = {
            ...objAddress,
            id_user: id,
            name_user: nameUser,
            number_phone: numberPhone,
        };
        setDataAddress(addressUserObj);
    }, [id, nameUser, numberPhone, objAddress]);

    const handleImportAddressUser = () => {
        setTimeout(() => {
            if (user === null) {
                return;
            }
            let o = Object.fromEntries(
                Object.entries({
                    ...data.user,
                    address: [
                        ...data.user.address,
                        { ...dataAddress, id: uuid.uniqueId('address_') },
                    ],
                }).filter(([_, v]) => v !== ''),
            );

            db.collection('users')
                .doc(id)
                .update({
                    ...o,
                })
                .then(() => {
                    toast.success(`B???n ???? th??m th??nh c??ng ?????a ch??? c???a m??nh ????`);
                })
                .catch((error) => {
                    toast.error(`???? xu???t hi???n l???i vui l??ng th???c hi???n l???i ????`);
                });
        }, 500);
        setNameUser('');
        setNumberPhone('');
        setObjAddress({
            tinh: '',
            quan: '',
            xa: '',
            mota: '',
        });
        setModal(false);
    };

    const confirm = (obj) => {
        setTimeout(() => {
            const addressFilter = data.user.address.filter(
                (adr) => adr.id !== obj.id,
            );
            db.collection('users')
                .doc(id)
                .update({
                    ...data.user,
                    address: addressFilter,
                })
                .then(() => {
                    toast.success(`B???n ???? x??a th??nh c??ng!`);
                })
                .catch((error) => {
                    toast.error(`C?? l???i, vui l??ng th???c hi???n l???i!`);
                });
        }, 500);
    };

    const importAddressUserItem = (obj) => {
        data.user.address.forEach((item) => {
            if (item.id === obj.id) {
                const address = {
                    status: item.status ? true : false,
                    id_user: item.id_user,
                    id: item.id,
                    tinh: obj.tinh || item.tinh,
                    quan: obj.quan || item.quan,
                    xa: obj.xa || item.xa,
                    mota: obj.mota || item.mota,
                    name_user: obj.name_user || item.name_user,
                    number_phone: obj.number_phone || item.number_phone,
                };

                const isEmpty = Object.values(address).every(
                    (x) => x === null || x === '',
                );

                if (isEmpty) {
                    toast.error(`C?? l???i, vui l??ng nh???p l???i ?????a ch???!`);
                } else {
                    const addressUpdate = data.user.address.map(function (
                        item,
                    ) {
                        return item.id === obj.id ? address : item;
                    });
                    db.collection('users')
                        .doc(id)
                        .update({
                            ...data.user,
                            address: addressUpdate,
                        })
                        .then(() => {
                            toast.success(`B???n ???? c???p nh???t th??nh c??ng!`);
                        })
                        .catch((error) => {
                            toast.error(`B???n c???p nh???t kh??ng th??nh c??ng!`);
                        });
                }
            }
        });
    };

    return (
        <FileUserAddress>
            <div className="address-title">
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
                                ?????a ch??? ng?????i d??ng
                            </p>
                            <Button
                                type="primary"
                                size="large"
                                icon={<PlusOutlined />}
                                onClick={() => setModal1Visible(true)}
                            >
                                Th??m ?????a Ch??? M???i
                            </Button>
                            <Modal
                                title="?????a ch??? m???i"
                                centered
                                style={{ top: 20 }}
                                visible={modal}
                                onOk={() => handleImportAddressUser()}
                                okButtonProps={{
                                    disabled: isEmptyObjectAll(dataAddress),
                                }}
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
                                        label="H??? v?? T??n"
                                        style={{ margin: 0, fontSize: '16px' }}
                                    >
                                        <Input
                                            placeholder="H??? v?? t??n"
                                            onChange={onChangeName}
                                            value={nameUser}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="S??? ??i???n tho???i"
                                        style={{ margin: 0 }}
                                    >
                                        <Input
                                            placeholder="S??? ??i???n tho???i"
                                            onChange={onChangeNumberPhone}
                                            value={numberPhone}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="?????a Ch???"
                                        style={{ margin: 0 }}
                                    >
                                        <SelecteValue
                                            active={1}
                                            objAddress={objAddress}
                                            address_api={address_api}
                                            onHandleValueImportAddress={
                                                onHandleValueImportAddress
                                            }
                                            widthInput="160px"
                                        />
                                    </Form.Item>

                                    <Form.Item label="Lo???i ?????a Ch???">
                                        <Button
                                            type="dashed"
                                            style={{ margin: '10px 10px' }}
                                            disabled
                                        >
                                            Nh?? Ri??ng
                                        </Button>
                                        <Button type="dashed" disabled>
                                            V??n Ph??ng
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
            </div>
            <div className="address-content">
                {data.user.address && data.user.address.length ? (
                    data.user.address.map((item, index) => {
                        if (Object.keys(item).length) {
                            return (
                                <AddressContentBox
                                    item={item}
                                    key={item.id}
                                    index={index}
                                    confirm={confirm}
                                    handleSetDefaultToAddress={
                                        handleSetDefaultToAddress
                                    }
                                    address_api={address_api}
                                    id_user={item.id_user}
                                    importAddressUserItem={
                                        importAddressUserItem
                                    }
                                />
                            );
                        }
                    })
                ) : (
                    <Empty />
                )}
            </div>
        </FileUserAddress>
    );
}

AddressUser.propTypes = {};

export default AddressUser;
