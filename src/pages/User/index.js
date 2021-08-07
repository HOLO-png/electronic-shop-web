import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Avatar, Button, Menu } from 'antd';
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
import {
    FILE_USER,
    NOTIFICATION_USER,
    ORDER,
    ORDER_WHEEL,
} from '../../constans';
import Userlayout from '../../Common/UserLayout';

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
        }
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
    const [openKeys, setOpenKeys] = React.useState(['sub2']);

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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <UserSetting>
                        <Avatar size={50} />
                        <div className="user-settings">
                            <p className="user-title">Bui Hoang Long</p>
                            <Button type="text" icon={<EditOutlined />}>
                                Sửa Hồ Sơ
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
                                    <Link to="/user/account/profile">
                                        Hồ sơ
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="2">
                                    <Link to="/user/account/payment">
                                        Ngân hàng
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/user/account/address">
                                        Địa chỉ
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/user/account/password">
                                        Đổi mật khẩu
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sub2" icon={<SnippetsOutlined />}>
                                <Link to="/user/purchase/all">Đơn Mua</Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub3"
                                icon={<BellOutlined />}
                                title="Thông báo"
                            >
                                <Menu.Item key="5">
                                    <Link to="/user/notification/order-update">
                                        Cập nhật đơn hàng
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/user/notification/promotion">
                                        Khuyến mãi
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/user/notification/wallet-update">
                                        Cập nhật ví
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/user/notification/work">
                                        Hoạt động
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to="/user/notification/updated-review">
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
