import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    DoubleRightOutlined,
    FunnelPlotOutlined,
    GiftOutlined,
    LaptopOutlined,
    MobileOutlined,
    TabletOutlined,
    TagsOutlined,
} from '@ant-design/icons';
import { Menu, Switch, Divider } from 'antd';
const { SubMenu } = Menu;

const SidebarLayout = styled.div`
    button.ant-btn {
        position: fixed;
        top: 20%;
        left: 0;
        z-index: 100;
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }
    span.anticon.anticon-double-right {
        font-size: 20px;
    }
    .ant-drawer-content-wrapper {
        width: 300px;
    }
`;

const titleSidebar = <span>Menu Danh Mục Sản Phẩm</span>;
const titleLucky = <span>Bạn có 2 lượt quay</span>;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
function Sidebar(props) {
    const [visible, setVisible] = useState(false);
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
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
        <SidebarLayout>
            <Tooltip placement="right" title={titleSidebar} color={'#2db7f5'}>
                <Button
                    icon={<DoubleRightOutlined />}
                    onClick={showDrawer}
                ></Button>
            </Tooltip>

            <Drawer
                title="Danh Mục Sản Phẩm"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Menu
                    style={{ width: 256 }}
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                >
                    <SubMenu
                        key="sub1"
                        icon={<MobileOutlined />}
                        title="Điện thoại thông minh"
                    >
                        <SubMenu key="sub1-1" title="SamSung">
                            <Menu.Item key="1">Samsung Galaxy A51</Menu.Item>
                            <Menu.Item key="2">Samsung Galaxy A50s</Menu.Item>
                            <Menu.Item key="3">Samsung Galaxy A10s</Menu.Item>
                            <Menu.Item key="4">
                                Samsung Galaxy A20s 32GB
                            </Menu.Item>
                            <Menu.Item key="5">Samsung Galaxy A71</Menu.Item>
                            <Menu.Item key="6">Samsung Galaxy S20</Menu.Item>
                            <Menu.Item key="7">
                                Samsung Galaxy S10 Lite
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1-2" title="Apple">
                            <Menu.Item key="1">IPhone 4</Menu.Item>
                            <Menu.Item key="2">IPhone 4S Plus</Menu.Item>
                            <Menu.Item key="3">IPhone 5</Menu.Item>
                            <Menu.Item key="4">IPhone 5S Plus</Menu.Item>
                            <Menu.Item key="5">IPhone 6</Menu.Item>
                            <Menu.Item key="6">IPhone 7</Menu.Item>
                            <Menu.Item key="7">IPhone 8</Menu.Item>
                            <Menu.Item key="8">IPhone 11</Menu.Item>
                            <Menu.Item key="9">IPhone 12</Menu.Item>
                            <Menu.Item key="10">IPhone 12XS Promax</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1-3" title="Oppo">
                            <Menu.Item key="1">Find X Series</Menu.Item>
                            <Menu.Item key="2">OPPO Find X3 Pro</Menu.Item>
                            <Menu.Item key="3">OPPO Find X2 Pro</Menu.Item>
                            <Menu.Item key="4">OPPO Find X2</Menu.Item>
                            <Menu.Item key="5">Reno Series</Menu.Item>
                            <Menu.Item key="6">OPPO Reno6 Z 5G</Menu.Item>
                            <Menu.Item key="7">OPPO Reno6 5G</Menu.Item>
                            <Menu.Item key="8">OPPO A16</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1-4" title="Xiaomi">
                            <Menu.Item key="1">Mi 11</Menu.Item>
                            <Menu.Item key="2">
                                Xiaomi Mi 11 Youth Edition
                            </Menu.Item>
                            <Menu.Item key="3">Xiaomi Mi 11 Pro</Menu.Item>
                            <Menu.Item key="4">Xiaomi Mi 11 Ultra</Menu.Item>
                            <Menu.Item key="5">Xiaomi K40</Menu.Item>
                            <Menu.Item key="6">
                                Xiaomi Redmi K40 Pro 5G
                            </Menu.Item>
                            <Menu.Item key="7">Redmi K40 Gaming</Menu.Item>
                            <Menu.Item key="8">Redmi Note 9T</Menu.Item>
                        </SubMenu>
                    </SubMenu>

                    <SubMenu
                        key="sub2"
                        icon={<LaptopOutlined />}
                        title="Laptop"
                    >
                        <SubMenu key="sub2-2" title="Macbook">
                            <Menu.Item key="5">Macbook Pro Max</Menu.Item>
                            <Menu.Item key="6">Macbook Plus</Menu.Item>
                            <Menu.Item key="6">Macbook Ari</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2-3" title="Asus">
                            <Menu.Item key="5">ASUS ZenBook UX434FA</Menu.Item>
                            <Menu.Item key="6">ASUS VivoBook A412FA</Menu.Item>
                            <Menu.Item key="6">
                                ASUS ROG Strix G G531GT
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2-4" title="Lenovo">
                            <Menu.Item key="5">Lenovo Essential</Menu.Item>
                            <Menu.Item key="6">Lenovo ThinkPad</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        icon={<TabletOutlined />}
                        title="Máy tính bảng"
                    >
                        <SubMenu key="sub2-2" title="Macbook"></SubMenu>
                        <SubMenu key="sub2-3" title="Asus"></SubMenu>
                        <SubMenu key="sub2-4" title="Lenovo"></SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        icon={<FunnelPlotOutlined />}
                        title="Phụ kiện điện thoại"
                    >
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        icon={<TagsOutlined />}
                        title="Phụ kiện Laptop"
                    >
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="link" icon={<GiftOutlined />}>
                        <Tooltip
                            placement="bottom"
                            title={titleLucky}
                            color={'#2db7f5'}
                        >
                            <Link to="/user/wheel">Vòng quay may mắn</Link>
                        </Tooltip>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </SidebarLayout>
    );
}

Sidebar.propTypes = {};

export default Sidebar;
