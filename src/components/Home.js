import React from 'react';
import 'antd/dist/antd.css';
import '../styles/Home.css';
import { Row, Col, Divider, Layout, Menu} from 'antd';
import PostList from './PostList'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth'
import '../styles/Home.css'



const { Header, Content, Footer } = Layout;

export default function Home() {

  const { loading, data } = useQuery(QUERY_POSTS);
  // console.log(loading)
  const allPosts = data?.allPosts || [];
  
/////////////////////////////////////////////////////////////////////////////////
  const currentUsername= Auth.getUser().data.username || [];
  console.log(currentUsername)
/////////////////////////////////////////////////////////////////////////////////
  // console.log(allPosts)

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:"black"}}>
        {/* <div className="logo" /> */}
        <Menu 
        theme="dark" 
        mode="horizontal" 
        activeClassName='menu'
        // defaultSelectedKeys={['2']} 
        style= {{backgroundColor: 'black',}}>
          <Menu.Item key="1"><NavLink to='/home'>Home</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to='/createpost'>Create Post</NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink to='/myprofile'>My Profile</NavLink></Menu.Item>
          {/* <Menu.Item key="4"><NavLink to='/login'>Login</NavLink></Menu.Item> */}
        </Menu>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><NavLink to='/'>Home</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to='/post'>Post</NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink to='/myprofile'>My Profile</NavLink></Menu.Item>
          <Menu.Item key="4"><NavLink to='/login'>Login</NavLink></Menu.Item>
        </Menu> */}
        
      </Header>
      <Divider orientation="left" >Vertical</Divider>
          <Row gutter={{md: 24}}
          justify={'center'}>
              <Col className="gutter-row" span={7} style={{marginBottom:'30px'}}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>
        
      
              <Col className="gutter-row" span={7}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>

              <Col className="gutter-row" span={7}>
                  <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 75 }}>
                      {loading ? (<h1>loading...</h1>)
                          :
                          (<PostList allPosts={allPosts} />)}
                  </Content>
              </Col>
              
              <Col className="gutter-row" span={7}>
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
