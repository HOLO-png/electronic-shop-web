import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Row } from 'antd';

export const menu = (
    <Menu>
        <div className="menu-content" style={{ padding: '10px' }}>
            <div className="menu-title">Varation:</div>
            <Row>
                <Menu.Item key="0">
                    <Button>Acai Berry </Button>
                </Menu.Item>
                <Menu.Item key="1">
                    <Button>Acai Berry </Button>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                    <Button>Acai Berry </Button>
                </Menu.Item>
            </Row>
            <Row>
                <Menu.Item key="0">
                    <Button>Acai Berry </Button>
                </Menu.Item>
                <Menu.Item key="1">
                    <Button>Acai Berry </Button>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                    <Button>Acai Berry </Button>
                </Menu.Item>
            </Row>
            <Row>
                <Menu.Item key="0">
                    <Button>Acai Berry </Button>
                </Menu.Item>
                <Menu.Item key="1">
                    <Button>Acai Berry </Button>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                    <Button>Acai Berry </Button>
                </Menu.Item>
            </Row>
        </div>
    </Menu>
);
