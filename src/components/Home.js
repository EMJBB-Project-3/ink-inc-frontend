import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import PostList from './PostList'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import Login from './Login';
import Signup from './SignUp';
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
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Post</Menu.Item>
          <Menu.Item key="3">My Profile</Menu.Item>
          <Menu.Item key="4">Login</Menu.Item>
        </Menu> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
         <NavLink to='/login'>Login</NavLink>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
{/* 
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Post</Breadcrumb.Item>
          <Breadcrumb.Item>My Profile</Breadcrumb.Item>
          <Breadcrumb.Item>Login</Breadcrumb.Item>
        </Breadcrumb> */}

        {loading? (<h1>loading...</h1>) 
         :
        (<PostList allPosts={allPosts}/>)}
      
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2022 Styled by EMJBB</Footer>
    </Layout>
  )
}
