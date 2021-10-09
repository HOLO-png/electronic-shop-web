import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    DoubleRightOutlined,
    LaptopOutlined,
    MobileOutlined,
    TabletOutlined,
} from '@ant-design/icons';
import TableCategoryProducts from './TableCategoryProducts';
import { category_title_table } from '../../assets/fake-data';
import './style.scss';

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
        font-size: 15px;
    }
    .ant-drawer-content-wrapper {
        width: 300px;
    }
`;

const titleSidebar = <span>Menu Danh Mục Sản Phẩm</span>;
const titleLucky = <span>Bạn có 2 lượt quay</span>;
function Sidebar(props) {
    const [visible, setVisible] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState(null);
    const [active, setActive] = useState(null);
    const [changeDataCategory, setChangeDataCategory] = useState(null);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const someHandler = (item, index) => {
        setShowTable(true);
        setChangeDataCategory(item);
        setActive(index);
    };

    const handleShowCategoryProduct = (data, isShow) => {
        setData(data);
        setIsShow(isShow);
    };

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (
                !e.target.closest('.table-category-product') &&
                !e.target.closest('#btn-show-table')
            ) {
                setShowTable(false);
                setActive(null);
            }
        });
        return () => {
            window.removeEventListener('mousemove', null);
        };
    }, []);

    const handleChangeIcon = (item) => {
        switch (item) {
            case 'Điện Thoại':
                return <MobileOutlined />;
            case 'Máy Tính Bảng':
                return <TabletOutlined />;
            case 'Laptop':
                return <LaptopOutlined />;
            default:
                break;
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
                <TableCategoryProducts
                    showTable={showTable}
                    handleShowCategoryProduct={handleShowCategoryProduct}
                    data={data}
                    isShow={isShow}
                    changeDataCategory={changeDataCategory}
                />
                {category_title_table.map((item, index) => (
                    <Button
                        type="text"
                        icon={handleChangeIcon(item.title)}
                        onMouseEnter={() => someHandler(item, index)}
                        id="btn-show-table"
                        key={item.title}
                        className={`btn-sidebar ${
                            active === index ? 'active' : ''
                        }`}
                    >
                        <Link to={item.link}>{item.title} </Link>
                    </Button>
                ))}
                <Tooltip placement="right" title={titleLucky} color={'#2db7f5'}>
                    <Button type="text" className="btn-sidebar">
                        <Link to="/user/wheel">Vòng quay may mắn</Link>
                    </Button>
                </Tooltip>
            </Drawer>
        </SidebarLayout>
    );
}

Sidebar.propTypes = {};

export default Sidebar;
