import React, { Component } from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { Table, Icon, Switch, Radio, Form } from 'antd';
import $ from 'jquery';

class App2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                width: 150,
                fixed: 'left',
                render: (text, key) => {
                    return {
                        props: {
                            className: '',
                        },
                        children: (<div>{text}</div>),
                    };
                },
            },
            {
                title: 'Age',
                dataIndex: 'age',
                render: (text, key) => {
                    return {
                        props: {
                            className: 'error'+key.key,
                        },
                        children: (<div className="content"><span className="bg"></span><span className="txt">{text}</span></div>),
                    };
                },
            },
            {
                title: 'Address',
                dataIndex: 'address',
                render: (text, key) => {
                    return {
                        props: {
                            className: '',
                        },
                        children: (<div>{text}</div>),
                    };
                },
            },
        ];
        
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
            
        return (
            <div className="App">
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 540, x: 1200 }}
                    footer={() => 'aaa'}
                />
            </div>
        );
    }
}
        
export default App2;