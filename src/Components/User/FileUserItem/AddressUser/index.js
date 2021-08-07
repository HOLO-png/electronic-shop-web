import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button, Row, Col, Divider, Tag, Cascader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import TextArea from 'antd/lib/input/TextArea';

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
const residences = [
    {
        value: 'Quảng Nam',
        label: 'Quảng Nam',
        children: [
            {
                value: 'Tam Kỳ',
                label: 'Tam Kỳ',
                children: [
                    {
                        value: 'Tam Thăng',
                        label: 'Tam Thăng',
                    },
                ],
            },
        ],
    },
    {
        value: 'Quảng Ngãi',
        label: 'Quảng Ngãi',
        children: [
            {
                value: 'Bình Chương',
                label: 'Bình Chương',
                children: [
                    {
                        value: 'Gò Vấp',
                        label: 'Gò Vấp',
                    },
                ],
            },
        ],
    },
];
function AddressUser(props) {
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const setModal1Visible = (modal1Visible) => {
        setModal(modal1Visible);
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
                            Thêm Thẻ Mới
                        </Button>
                        <Modal
                            title="Địa chỉ mới"
                            centered
                            style={{ top: 20 }}
                            visible={modal}
                            onOk={() => setModal1Visible(false)}
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
                                    <Input placeholder="Họ và tên" />
                                </Form.Item>
                                <Form.Item
                                    label="Số điện thoại"
                                    style={{ margin: 0 }}
                                >
                                    <Input placeholder="Số điện thoại" />
                                </Form.Item>
                                <Form.Item
                                    name="residence"
                                    label="Địa chỉ"
                                    rules={[
                                        {
                                            type: 'array',
                                            required: true,
                                            message:
                                                'Tỉnh - Thành Phố - Huyện/Xã',
                                        },
                                    ]}
                                >
                                    <Cascader options={residences} />
                                </Form.Item>
                                <Form.Item label="Địa chỉ cụ thể">
                                    <TextArea
                                        rows={4}
                                        placeholder="Địa chỉ cụ thể"
                                    />
                                </Form.Item>

                                <Form.Item label="Loại Địa Chỉ">
                                    <Button
                                        type="dashed"
                                        style={{ marginRight: '10px' }}
                                    >
                                        Nhà Riêng
                                    </Button>
                                    <Button type="dashed">Văn Phòng</Button>
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
                                <p className="user-name">Bui Hoang Long</p>
                                <Tag color="green">Mặc Định</Tag>
                            </Form.Item>

                            <Form.Item
                                label="Số Điện Thoại"
                                style={{ margin: 0 }}
                            >
                                <p className="user-name">(+84) 396533849</p>
                            </Form.Item>
                            <Form.Item label="Địa Chỉ">
                                <p className="user-name">
                                    43-Bàu Tràm 1 Phường Khuê Trung Quận Cẩm Lệ
                                    Đà Nẵng
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
                        <Button disabled style={{ marginTop: '20px' }}>
                            Thiết Lập Mặc Định
                        </Button>
                    </FileUserInfo>
                </Col>
            </Row>
        </FileUserAddress>
    );
}

AddressUser.propTypes = {};

export default AddressUser;
