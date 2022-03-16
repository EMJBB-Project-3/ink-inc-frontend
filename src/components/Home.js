// import PostCard from "./PostCard.js"
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import PostList from './PostList'
// // import { QUERY_USERS } from '../utils/queries';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';



const { Header, Content, Footer } = Layout;

export default function Home() {

  const {data}  = useQuery(QUERY_POSTS);
  // console.log(data)
  // console.log(typeof data)
  

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Post</Menu.Item>
        <Menu.Item key="3">My Profile</Menu.Item>
        <Menu.Item key="4">Login</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Post</Breadcrumb.Item>
        <Breadcrumb.Item>My Profile</Breadcrumb.Item>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {/* <PostCard 
        username={"username here"}
        text={"text"}
        /> */}
      </div>
      <PostList data={data}/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2022 Styled by EMJBB</Footer>
  </Layout>
  )
}
  