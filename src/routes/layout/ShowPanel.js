import React, { Component } from 'react';
import { connect } from 'dva';
import Table from '../../components/Table';

class ShowPanel extends Component {
  render() {
    //dataSource of the Table component, come from Redux.
    const dataSource = this.props.people;
    return (
      <div >
        <Table dataSource={dataSource}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

export default connect(mapStateToProps)(ShowPanel);
