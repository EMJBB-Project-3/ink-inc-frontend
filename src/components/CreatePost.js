import React from "react";
import 'antd/dist/antd.css';

import { NavLink } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Layout, Menu, Form, Input, Button, Upload, Modal } from 'antd';

export default function CreatePost() {
    
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  class PicturesWall extends React.Component {
    state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://tattmag.com/wp-content/uploads/2020/05/Joker-Tattoo.jpg',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://kickassthings.com/wp-content/uploads/2016/01/cool-wolf-tattoo-ideas-@milkercordova-23.jpg',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXn8UkcphR95WNZmZJ2O1QiSy3t3xfnf1yWA&usqp=CAU',
        },
      ],
    };
  
    handleCancel = () => this.setState({ previewVisible: false });
  
    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
  
    handleChange = ({ fileList }) => this.setState({ fileList });
  
    render() {
      const { previewVisible, previewImage, fileList, previewTitle } = this.state;
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload Your Art</div>
        </div>
      );
      return (
        <>
        <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1"><NavLink to='/'>Home</NavLink></Menu.Item>
                  <Menu.Item key="2"><NavLink to='/post'>Post</NavLink></Menu.Item>
                  <Menu.Item key="3"><NavLink to='/myprofile'>My Profile</NavLink></Menu.Item>
                  <Menu.Item key="4"><NavLink to='/login'>Login</NavLink></Menu.Item>
              </Menu>
          </Header>
          
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
          <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Post</Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content">
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="Caption"
          name="caption"
          rules={[
            {
              required: true,
              message: 'Make your own caption for your tattoo art post!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Artist Credit"
          name="credit"
          rules={[
            {
              required: true,
              message: 'Please give the artist their credit by mentioning them in your post!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/* <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload> */}
          <Button type="primary" htmlType="submit">
            Submit Post
          </Button>
        </Form.Item>
      </Form>
        </div>
        
        {/* <button>Use The Upload box above to Upload an Image!</button> */}
      </Content>
          <Footer style={{ textAlign: 'center' }}>
        ***WARNING: WE ARE NOT RESPONSIBLE FOR ANY COPYRIGHT IMAGES OR NSFW. UPLOAD AT YOUR OWN RISK***
        <br></br>
        <br></br>
        Ant Design ©2022 Created by EMJBB
      </Footer>
      </Layout>,
        </>
      );
    }
  }
}