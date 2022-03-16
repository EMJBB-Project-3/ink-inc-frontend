import LikeButton from './LikeButton'
import { Card } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
// const { Meta } = Card;

const { Header, Content, Footer } = Layout;

export default function PostCard({ username, text }) {

    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <div>
                    <h3>{username}</h3>
                </div>
                <img
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ height: 100 }}
                >
                </img>
                <div>
                    <p>{text}</p>
                </div>

                <div>
                    <LikeButton />
                </div>



                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            </Card>

            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {new Array(4).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Post</Breadcrumb.Item>
                        <Breadcrumb.Item>Profile</Breadcrumb.Item>
                        <Breadcrumb.Item>About</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">Make a comment!</div>
                    <button>Upload an Image!</button>
                    <button>Submit Post!</button>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by EMJBB
                </Footer>
            </Layout>
        </>
    )
}