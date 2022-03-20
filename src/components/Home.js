import React from 'react';
import 'antd/dist/antd.css';
import '../styles/Home.css';
import { Row, Col, Divider, Layout, Menu} from 'antd';
import PostList from './PostList'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import { NavLink } from 'react-router-dom';



const { Header, Content, Footer } = Layout;

export default function Home() {

  const { loading, data } = useQuery(QUERY_POSTS);
  // console.log(loading)
  const allPosts = data?.allPosts || [];
  // console.log(allPosts)

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><NavLink to='/'>Home</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to='/post'>Post</NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink to='/myprofile'>My Profile</NavLink></Menu.Item>
          <Menu.Item key="4"><NavLink to='/login'>Login</NavLink></Menu.Item>
        </Menu>
        
      </Header>
      <Divider orientation="left">Responsive</Divider>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>

              <Col className="gutter-row" span={6}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>

              <Col className="gutter-row" span={6}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>
              
              <Col className="gutter-row" span={6}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>
          </Row>
      
      <Footer style={{ textAlign: 'center' }}>©2022 Styled by EMJBB</Footer>
    </Layout>
  )
}
