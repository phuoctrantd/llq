import './App.css';
import React from 'react';
import logo from './assets/logo.svg'
import 'antd/dist/antd.css'
import { Layout, Menu,Image, Avatar, Breadcrumb,Typography,Rate  } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Row, Col } from 'antd';
const { Header, Content, Sider,Footer } = Layout;
const { Title } = Typography;


function App() {
  
  return (

    <Layout>
      <Header style={{padding:10,background:'#fc5a31',height:120}}>
        <Image src={logo}  preview={false} />
        <Avatar style={{float:'right'}} icon="user" size={60}/>
      </Header>
      <Layout>
        <Sider style={{background:'#fff'}} >
          <Menu >
            <Menu.Item>
              Sản phẩm
            </Menu.Item>
            <SubMenu title="Tài khoản của tôi">
                <Menu.Item>
                  Hồ sơ
                </Menu.Item>
                <Menu.Item>
                  Địa chỉ
                </Menu.Item>
                <Menu.Item>
                  Đổi mật khẩu
                </Menu.Item>
            </SubMenu>
            <Menu.Item>
              Giỏ hàng
            </Menu.Item>
            <Menu.Item>
              Hỗ trợ
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{padding:'0 50px'}}>
        <Breadcrumb style={{margin:'16px 0'}}>
          <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background:'#fff',padding:24,minHeight:580}}>
          <div style={{padding:50}}>
            <Row style={{paddingBotom:50}}>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/029bc7d69f18c2ea1485df22c78bcc86' width={400} /></Row>
                <Row><Title level={3}>Lon Cafe Highlands 185ml/235ml</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>57.000 VND</div></Row>
                <Row><Rate disabled defaultValue={5} /></Row>
              </Col>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/66dc2551b97dfd5b1228f518cb679f61' width={400} /></Row>
                <Row><Title level={3}>Cà phê hòa tan G7 3in1 Trung Nguyên Legend Bịch 1,6kg</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>225.000 VND</div></Row>
                <Row><Rate disabled defaultValue={4} /></Row>
              </Col>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/20272185f8350346344ff6bbfc9fccca' width={400} /></Row>
                <Row><Title level={3}>Nescafe Hòa Tan 3 in 1 Sữa Đá / Đen Đá / Đậm Vị Cafe / Đậm Vị Hài Hoà</Title></Row> 
                <Row> <div style={{color:'red',fontSize:20}}>57.000 VND</div></Row>
                <Row><Rate disabled defaultValue={3.5} /></Row>
              </Col>
            </Row>
          </div>
          <div style={{padding:50}}>
            <Row style={{paddingBotom:50}}>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/a63b0e2d62004e7a2f776cc3bfa16d27' width={400} /></Row>
                <Row><Title level={3}>Cà phê hòa tan 3 in 1 Goodmorning cafe sữa uống liền (bịch 24 gói x 20gr) Trần Quang Coffe</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>157.000 VND</div></Row>
                <Row><Rate disabled defaultValue={2} /></Row>
              </Col>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/bcdd22cde39d7b49fe0ba238fe33fea9' width={400} /></Row>
                <Row><Title level={3}>Cà phê hòa tan G7 3in1 Trung Nguyên Legend Bịch 1,6kg</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>225.000 VND</div></Row>
                <Row><Rate disabled defaultValue={4} /></Row>
              </Col>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/20272185f8350346344ff6bbfc9fccca' width={400} /></Row>
                <Row><Title level={3}>Nescafe Hòa Tan 3 in 1 Sữa Đá / Đen Đá / Đậm Vị Cafe / Đậm Vị Hài Hoà</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>57.000 VND</div></Row>
                <Row><Rate disabled defaultValue={3.5} /></Row>
              </Col>
            </Row>
          </div>

          <div style={{padding:50}}>
            <Row style={{paddingBotom:50}}>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/ad00daa0ee1390ca40525429f9513c68' width={400} /></Row>
                <Row><Title level={3}>Lon Cafe Highlands 185ml/235ml</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>57.000 VND</div></Row>
                <Row><Rate disabled defaultValue={5} /></Row>
              </Col>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/66dc2551b97dfd5b1228f518cb679f61' width={400} /></Row>
                <Row><Title level={3}>Cà phê hòa tan G7 3in1 Trung Nguyên Legend Bịch 1,6kg</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>225.000 VND</div></Row>
                <Row><Rate disabled defaultValue={4} /></Row>
              </Col>
              <Col span={8}>
                <Row><Image src='https://cf.shopee.vn/file/20272185f8350346344ff6bbfc9fccca' width={400} /></Row>
                <Row><Title level={3}>Nescafe Hòa Tan 3 in 1 Sữa Đá / Đen Đá / Đậm Vị Cafe / Đậm Vị Hài Hoà</Title></Row>
                <Row> <div style={{color:'red',fontSize:20}}>57.000 VND</div></Row>
                <Row><Rate disabled defaultValue={3.5} /></Row>
              </Col>
            </Row>
          </div>
        

        
        </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Thanks you !</Footer>
    </Layout>
  );
}

export default App;
