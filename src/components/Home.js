import 'antd/dist/antd.css';
import '../styles/Home.css';
import { Layout, Menu} from 'antd';
import PostList from './PostList'
import Welcome from './Welcome'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ONE_USER } from '../utils/queries';
import { NavLink } from 'react-router-dom';
import { getSuggestedQuery } from '@testing-library/react';
import Auth from '../utils/auth'


const { Header, Content, Footer } = Layout;

export default function Home() {

  const { loading, data } = useQuery(QUERY_POSTS);
  const allPosts = data?.allPosts || [];
  

  const currentUserID = Auth.getUser().data._id
  // console.log(currentUserID)
  // console.log(Auth.getUser().data)
  
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
      <Content className="site-layout" style={{ padding: '50px', marginTop: 64 }}>

      <Welcome currentUserID={currentUserID}/>

        {loading? (<h1>loading...</h1>) 
         :
        (<PostList allPosts={allPosts}/>)}
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>©2022 Styled by EMJBB</Footer>
    </Layout>
  )
}
