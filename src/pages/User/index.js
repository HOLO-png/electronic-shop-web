import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Menu } from 'antd';
import { Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Helmet from '../../Components/Helmet';
import {
    BellOutlined,
    DollarCircleOutlined,
    EditOutlined,
    SnippetsOutlined,
    UserOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { FILE_USER, NOTIFICATION_USER, ORDER_WHEEL } from '../../constans';
import Userlayout from '../../Common/UserLayout';
import { AuthContext } from '../../Context/AuthProvider';
import { useDispatch } from 'react-redux';

import { renderPhotoAccout } from '../../utils/avartarChange';

const UserSetting = styled.div`
    display: flex;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    .user-settings {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        & p {
            margin-bottom: 0;
        }
        .user-title {
            font-size: 17px;
            font-weight: 600;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
        }
    }
    ul#rc-menu-uuid-92169-1-sub3-popup {
        background: #fff;
    }
`;

const UserChoice = styled.div`
    .anticon {
        font-size: 20px;
    }
    .ant-menu-item {
        margin-top: 10px;
    }
`;
const renderUserFileItem = () => {
    let xhtml = null;
    xhtml = FILE_USER.map((route, index) => {
        return (
            <Userlayout
                name={route.name}
                key={index}
                component={route.component}
                exact={route.exact}
                path={route.path}
            />
        );
    });
    return xhtml;
};
const renderOrderWheetUser = () => {
    let xhtml = null;
    xhtml = ORDER_WHEEL.map((route, index) => {
        return (
            <Userlayout
                name={route.name}
                key={index}
                component={route.component}
                exact={route.exact}
                path={route.path}
            />
        );
    });
    return xhtml;
};
const renderNotificationUser = () => {
    let xhtml = null;
    xhtml = NOTIFICATION_USER.map((route, index) => {
        return (
            <Userlayout
                name={route.name}
                key={index}
                component={route.component}
                exact={route.exact}
                path={route.path}
            />
        );
    });
    return xhtml;
};
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
function PurchaseOrder(props) {
    const dispatch = useDispatch();
    const [openKeys, setOpenKeys] = React.useState(['sub2']);
    const data = React.useContext(AuthContext);
    const { email, photoURL, uid, displayName } = data.user;

    const handleClick = (e) => {
        console.log('click ', e);
    };
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <Helmet title="User">
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ transform: 'translateY(20px)' }}
            >
                <Col
                    className="gutter-row"
                    span={6}
                    style={{ background: '#fff', padding: '20px' }}
                >
                    <UserSetting>
                        {renderPhotoAccout(photoURL, 50, displayName)}
                        <div className="user-settings">
                            <p className="user-title">{displayName}</p>
                            <Button type="text" icon={<EditOutlined />}>
                                <Link to="/user/profile">Sửa Hồ Sơ</Link>
                            </Button>
                        </div>
                    </UserSetting>
                    <UserChoice>
                        <Menu
                            onClick={handleClick}
                            style={{
                                width: 256,
                                marginTop: '10px',
                                fontSize: '17px',
                            }}
                            defaultSelectedKeys={['sub2']}
                            defaultOpenKeys={['sub2']}
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                        >
                            <SubMenu
                                key="sub1"
                                icon={<UserOutlined />}
                                title="Tài khoản của tôi"
                            >
                                <Menu.Item key="1">
                                    <Link to="/user/profile">Hồ sơ</Link>
                                </Menu.Item>

                                <Menu.Item key="2">
                                    <Link to="/user/payment">Ngân hàng</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/user/address">Địa chỉ</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/user/password">
                                        Đổi mật khẩu
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sub2" icon={<SnippetsOutlined />}>
                                <Link to="/user/all">Đơn Mua</Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub3"
                                icon={<BellOutlined />}
                                title="Thông báo"
                            >
                                <Menu.Item key="5">
                                    <Link to="/user/order-update">
                                        Cập nhật đơn hàng
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/user/promotion">Khuyến mãi</Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/user/wallet-update">
                                        Cập nhật ví
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/user/work">Hoạt động</Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to="/user/updated-review">
                                        Đánh giá cập nhật
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item
                                key="sub4"
                                icon={<DollarCircleOutlined />}
                            >
                                <Link to="/user/wheel">Vòng quay may mắn</Link>
                            </Menu.Item>
                        </Menu>
                    </UserChoice>
                </Col>
                <Col
                    className="gutter-row processing"
                    span={17}
                    style={{
                        height: 'auto',
                        border: '1px solid rgb(240 240 240)',
                        boxShadow: '0px 0px 5px 2px #e6e6e6',
                        padding: '16px',
                        background: '#fff',
                    }}
                >
                    <Switch>
                        {renderUserFileItem()}
                        {renderOrderWheetUser()}
                        {renderNotificationUser()}
                    </Switch>
                </Col>
            </Row>
        </Helmet>
    );
}

PurchaseOrder.propTypes = {};

export default PurchaseOrder;
