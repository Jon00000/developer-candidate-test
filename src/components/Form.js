import React, { Component } from 'react';
import { Form, Row, Col, Button, Radio } from "antd";

class FormLayout extends Component {

    handleSearch = (e) => {
        e.preventDefault();

        //validate user input
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //callback to parent container
                this.props.onHandleSubmit(values);
            }
        });
    }
    // clear the filters
    handleReset = () => {
        this.props.form.resetFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} >
                <Row gutter={24}>
                    <Col >
                        {/* Gender Radio*/}
                        <Form.Item label="Gender" >
                            {getFieldDecorator(`gender`, {
                                initialValue: 'all',
                                rules: [{
                                    required: true,
                                    message: "Choose gender!",
                                }],
                            })(
                                <Radio.Group buttonStyle='solid' style={{ float: "left" }}>
                                    <Radio.Button value="all">All</Radio.Button>
                                    <Radio.Button value="male">Male</Radio.Button>
                                    <Radio.Button value="female">Female</Radio.Button>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Col>
                    <Col>
                        {/* Age Radio*/}
                        <Form.Item label="Age">
                            {getFieldDecorator(`age`, {
                                initialValue: 'all',
                                rules: [{
                                    required: true,
                                    message: "Choose age!",
                                }],
                            })(
                                <Radio.Group size='default' buttonStyle='solid' style={{ float: "left" }}>
                                    <Radio.Button value="all">All</Radio.Button>
                                    <Radio.Button value="under30">Under 30</Radio.Button>
                                    <Radio.Button value="over30">Over 30</Radio.Button>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center', marginBottom: '10px' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default FormLayout = Form.create()(FormLayout);
