import React, { Component } from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { Table, Icon, Switch, Radio, Form } from 'antd';
import $ from 'jquery';
const FormItem = Form.Item;


class App1 extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollNext = this.handleScrollNext.bind(this);
        this.handleScrollPrev = this.handleScrollPrev.bind(this);
    }

    handleScroll() {
        console.log('aaaa');
    }

    handleScrollNext() {
        console.log('bbb');
        //document.querySelector('.ant-table-fixed').classList.remove('scrollPrev');
        //document.querySelector('.ant-table-fixed').classList.add('scrollNext');
        //document.querySelector('.ant-table-body').scrollLeft += 200;
        $('.ant-table-body').animate({scrollLeft :'+=300'}, 'slow');
    }

    handleScrollPrev() {
        console.log('aaa');
        // document.querySelector('.ant-table-fixed').classList.remove('scrollNext');
        // document.querySelector('.ant-table-fixed').classList.add('scrollPrev');
        $('.ant-table-body').animate({scrollLeft :'-=300'}, 'slow');
    }

    render() {

        const columns = [
            { title: <a href="javascript:;">Name</a>, dataIndex: "name", key: "name", width: "40%", fixed: "left", width: 200 },
            { title: "Age", dataIndex: "age", key: "age", width: "30%" },
            { title: "Address", dataIndex: "address", key: "address", fixed: "right", width: 200  }
        ];

        const data = [
            {
                key: 1, name: "John Brown sr.", age: 60, address: "New York No. 1 Lake Park",
                children: [
                    { key: 11, name: 'aaa', age: <input value='42' />, address: "New York No. 2 Lake Park" },
                ]
            },
            { key: 2, name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" }
        ];
          
        return (
            <div className="App">
                <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} onChange={this.handleScroll} />
                <div className="action">
                    <a href="javascript:;" onClick={this.handleScrollPrev}>Preview</a>{'   '}
                    <a href="javascript:;" onClick={this.handleScrollNext}>Next</a>
                </div>
            </div>
        );
    }
}

export default App1;
