import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';
import { Row, Col, Button } from 'antd';

const { Header, Footer, Content } = Layout;

const Main = props => {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Teg Online</h1>
      </Header>
      <Content>
        <Row style={{ padding: '20px 0' }}>
          <Col span={12} offset={6} style={{ textAlign: 'center' }}>
            <div>
              <Button shape="round">
                <Link to="/newGame">New Game</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Main;