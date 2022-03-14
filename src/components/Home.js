import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu, Space, Card, Rate } from 'antd';
import {
  
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  PushpinOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
    return(
        

    ReactDOM.render(
        <Layout hasSider>
        <Sider
            style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            }}
        >
        
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<PushpinOutlined />}>
          Post
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          About
        </Menu.Item>
        
      </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <Space direction="horizontal">
        
        <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

        <Card title="Card" style={{ width: 300 }}>
            <p>hi</p>
            <p>Card content</p>
        </Card>

        <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        </Space>

        <Space direction="horizontal">
        <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

        <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

        <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        </Space>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Styled By EMJBB</Footer>
        </Layout>
        </Layout>,
        document.getElementById('container'),
        )
    )
}

