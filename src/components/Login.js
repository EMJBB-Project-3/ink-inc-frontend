import 'antd/dist/antd.css';
import { Layout, Card, Col, Row } from 'antd';
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import '../styles/LoginCard.css'
import '../styles/Header.css'


const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function Login() {
    return (
        <Layout className='container'>
    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'black', justifyContent:'center', height:'100px'}}>
        <h1 style = {{color:'white', fontSize:'50px', marginTop:'20px'}}>Ink inc</h1>
    </Header>
            {/* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}> */}
            
                <div className="site-card-wrapper">
                    {/* <Row gutter={16}>
                        <Col span={8}> */}
                            
                            <Card hoverable style={{ width: 540, margin:50, border:'black solid 5px', position:'fixed'}}>
                            
                                <div>
                                    <div>
                                        <h2>Log in</h2>
                                        <LoginForm />
                                    </div>
                                    <div>
                                        <h2>Sign Up</h2>
                                        <SignUp />
                                    </div>

                                </div>
                                <Meta description="www.ink-inc.global" />
                            </Card>
                        {/* </Col>


                    </Row> */}
                </div>

            {/* </Content> */}
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by EMJBB</Footer>
        </Layout>
        


    )


}