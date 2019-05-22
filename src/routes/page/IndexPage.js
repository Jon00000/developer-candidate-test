import React from 'react';
import { Layout } from 'antd';
import QueryPanel from '../layout/QueryPanel';
import ShowPanel from '../layout/ShowPanel';
// import styles from './IndexPage.css';

const { Header, Content } = Layout;

function IndexPage() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo">
            <span style={{ color: "#fff", fontSize: 22, fontWeight: "bold", float: 'left' }}>People's Infomation</span>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <QueryPanel />
              <ShowPanel />
            </Content>
          </Layout>
        </Content>

      </Layout>
    </div>
  );
}

export default IndexPage;
