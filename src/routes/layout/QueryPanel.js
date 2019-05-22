import React, { Component } from 'react';
import { connect } from 'dva';
import Form from "../../components/Form";

class QueryPanel extends Component {
    handleSubmit(values) {
        //dispatch async fetch action here
        this.props.dispatch({  //action
            type: 'people/fetch', 
            payload: values
        })
    }
    render() {
        return (
            <Form onHandleSubmit={this.handleSubmit.bind(this)}/>
        )
    }
}

//connect to use Redux's dispatch 
export default connect()(QueryPanel);
