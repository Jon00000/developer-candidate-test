import React from 'react';
import PropTypes from 'prop-types';
import { Table} from 'antd';

class TableLayout extends React.Component {

    render() {
        const columns = [{
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'AGE',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            // sortDirections: ['ascend'],
            defaultSortOrder: ['ascend'],
        }, {
            title: 'GENDER',
            dataIndex: 'gender',
            key: 'gender',
        }];
        return (
            <div >
                <Table dataSource={this.props.dataSource}
                    columns={columns}
                    rowKey='_id'
                >
                </Table>
            </div>
        );
    }
}
// validate the dataSource type
TableLayout.propTypes = {
    dataSource: PropTypes.array,
};

export default TableLayout;
