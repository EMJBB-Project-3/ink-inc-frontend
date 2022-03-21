import React from "react";
import '../App.css'

import { NavLink } from 'react-router-dom';
import { Layout, Menu, Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default function CreatePost() {

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    
    return (
        <>
            <div style={{height: '100%', width: '100%'}}>
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', marginBottom: '100px' }}>
                    {/* <div className="logo" /> */}
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><NavLink to='/home'>Home</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='createpost'>Post</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to='/myprofile'>My Profile</NavLink></Menu.Item>
                        {/* <Menu.Item key="4"><NavLink to='/login'>Login</NavLink></Menu.Item> */}
                    </Menu>
                </Header>
              <div >  

                <Content style={{ padding: '0 50px', height: '100%', width: '100%' }}>
                    <div className="site-layout-content">
                        <Form style={{ marginTop: '60px'}}
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
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                                    <Button type="primary" htmlType="submit">
                                    Submit Post
                                    </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    ***WARNING: WE ARE NOT RESPONSIBLE FOR ANY COPYRIGHT IMAGES OR NSFW. UPLOAD AT YOUR OWN RISK***
                    <br></br>
                    <br></br>
                    Ant Design ©2022 Created by EMJBB
                </Footer>
                </div>
            </Layout>
            </div>
        </>
    );
}
//   }
// }