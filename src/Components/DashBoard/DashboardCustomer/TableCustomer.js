import React from 'react';
import { Table, Input, Button, Space } from 'antd';
// import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
    {
        key: '1',
        stt: '1',
        name: 'Bùi Hoàng Long',
        phone_number: '01633856382',
        email: 'wwwlong91@gmail.com',
        reputation: 100,
        address: 'Xuân Quý, Tam Thăng, Tam Kỳ, Quảng Nam',
    },
    {
        key: '2',
        stt: '2',
        name: 'Nguyễn Năng Trung Bắc',
        phone_number: '01633856382',
        email: 'wwwlong91@gmail.com',
        reputation: 100,
        address: 'Xuân Quý, Tam Thăng, Tam Kỳ, Quảng Nam',
    },
    {
        key: '3',
        stt: '3',
        name: 'Phạm Nhật Thiên',
        phone_number: '01633856382',
        email: 'wwwlong91@gmail.com',
        reputation: 100,
        address: 'Xuân Quý, Tam Thăng, Tam Kỳ, Quảng Nam',
    },
    {
        key: '4',
        stt: '4',
        name: 'Đặng Thanh Nhựt',
        phone_number: '01633856382',
        email: 'wwwlong91@gmail.com',
        reputation: 100,
        address: 'Xuân Quý, Tam Thăng, Tam Kỳ, Quảng Nam',
    },
    {
        key: '5',
        stt: '5',
        name: 'Nguyễn Duy Hảo',
        phone_number: '01633856382',
        email: 'wwwlong91@gmail.com',
        reputation: 100,
        address: 'Xuân Quý, Tam Thăng, Tam Kỳ, Quảng Nam',
    },
];

class TableCustomer extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        checkStrictly: false,
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node) => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        this.handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            this.handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => this.handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{ color: filtered ? '#1890ff' : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        // render: (text) =>
        //     this.state.searchedColumn === dataIndex ? (
        //         <Highlighter
        //             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        //             searchWords={[this.state.searchText]}
        //             autoEscape
        //             textToHighlight={text ? text.toString() : ''}
        //         />
        //     ) : (
        //         text
        //     ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows,
            );
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: 'STT',
                dataIndex: 'stt',
                key: 'stt',
                width: '5%',
                ...this.getColumnSearchProps('stt'),
            },
            {
                title: 'Tên',
                dataIndex: 'name',
                key: 'name',
                width: '25%',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Số Điện Thoại',
                dataIndex: 'phone_number',
                key: 'phone_number',
                width: '18%',
                ...this.getColumnSearchProps('phone_number'),
            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '18%',
                ...this.getColumnSearchProps('email'),
            },
            {
                title: 'Uy Tín',
                dataIndex: 'reputation',
                width: '9%',
                ...this.getColumnSearchProps('reputation'),
            },
            {
                title: 'Địa Chỉ',
                dataIndex: 'address',
                key: 'address',
                ...this.getColumnSearchProps('address'),
                sorter: (a, b) => a.address.length - b.address.length,
                sortDirections: ['descend', 'ascend'],
            },
        ];

        const { checkStrictly } = this.state;
        return (
            <>
                <Table
                    columns={columns}
                    rowSelection={{ ...this.rowSelection, checkStrictly }}
                    dataSource={data}
                />
            </>
        );
    }
}
export default TableCustomer;
