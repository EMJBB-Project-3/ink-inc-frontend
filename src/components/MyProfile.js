import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Card, Col, Row } from 'antd';
import Auth from '../utils/auth'
import UserPosts from './UserPosts';
import PostList from './PostList';

import { useQuery } from '@apollo/client';
import { QUERY_USER_POSTS } from '../utils/queries';

export default function MyProfile() {

    const { Header, Content, Footer } = Layout;
    const { Meta } = Card;


  const currentUsername = Auth.getUser().data.username || [];
  console.log(currentUsername)

  const { loading, data } = useQuery(QUERY_USER_POSTS, {
    variables: {username:currentUsername}
  });
  console.log(data)
  const userPosts = data?.userPosts|| [];
  console.log(userPosts)


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
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      
    {/* {loading? (<h1>loading...</h1>) 
         :
        (<PostList/>)} */}


    <UserPosts userPosts={userPosts}></UserPosts>





      {/* <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <h2>Tatlover69 favorite pic!</h2>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
      </Col>
      <Col span={8}>
      <h2>Tatlover69 favorite pic!</h2>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
      </Col>
      <Col span={8}>
      <h2>Tatlover69 favorite pic!</h2>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
      </Col>
    </Row>
  </div> */}
      
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by EMJBB</Footer>
  </Layout>
    )
}
