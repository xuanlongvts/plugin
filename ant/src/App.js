import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
// import { Table } from 'antd';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';

class App extends Component {

    render() {
      
        // const columns = [
        //     { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
        //     { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
        //     { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
        //     { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
        //     { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
        //     { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
        //     { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
        //     { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
        //     { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
        //     { title: 'Column 8', dataIndex: 'address', key: '8' },
        //     {
        //         title: 'Action',
        //         key: 'operation',
        //         fixed: 'right',
        //         width: 100,
        //         render: () => <a href="javascript:;">action</a>,
        //     },
        // ];

        // const data = [];
        // for (let i = 0; i < 100; i++) {
        //     data.push({
        //         key: i,
        //         name: `Edrward ${i}`,
        //         age: 32,
        //         address: `London Park no. ${i}`,
        //     });
        // }

        function NestedTable() {
            const expandedRowRender = () => {
                const columns = [
                    // { title: '', dataIndex: 'name', key: 'name' },
                    // { title: '', dataIndex: 'platform', key: 'platform' },
                    // { title: '', dataIndex: 'version', key: 'version' },
                    // { title: '', dataIndex: 'upgraded', key: 'upgraded' },
                    // { title: '', dataIndex: 'creator', key: 'creator' },
                    // { title: '', dataIndex: 'date', key: 'date' },
                    // { title: '', dataIndex: 'action', key: 'action' },
                ];
          
                const data = [];
                    for (let i = 0; i < 1; ++i) {
                        data.push({
                            key: i,
                            name: 'Name',
                            platform: 'Platform',
                            version: 'Version',
                            upgraded: 'Upgraded',
                            creator: 'Creator',
                            date: '2014-12-24 23:12:00',
                            action: 'Action',
                        });
                    }

                    return (
                        <Table
                        dataSource={data}
                        pagination={false}
                        />
                    );
                };
          
                const columns = [
                    { title: 'Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
                    { title: 'Platform', width: 100, dataIndex: 'platform', key: 'platform', fixed: 'left' },
                    { title: 'Version', dataIndex: 'version', key: 'version' },
                    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
                    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
                    { title: 'Action', key: 'operation', render: () => <a href="javascript:;">Publish</a>},
                ];
            
                const data = [];
                for (let i = 0; i < 3; ++i) {
                    data.push({
                        key: i,
                        name: 'Screem',
                        platform: 'iOS',
                        version: '10.3.4.5654',
                        upgradeNum: 500,
                        creator: 'Jack',
                        createdAt: '2014-12-24 23:12:00',
                    });
                }
            
                return (
                    <Table
                        className="components-table-demo-nested"
                        columns={columns}
                        expandedRowRender={expandedRowRender}
                        dataSource={data}
                        scroll={{ x: 1300 }}
                    />
                );
            }

            return (
                <div className="App">
                    <NestedTable />
                </div>
            );
    }
}

export default App;
