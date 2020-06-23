import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Layout } from 'antd';

import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Divider } from 'antd';

const { Header, Footer, Content } = Layout;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const NewGame = props => {
  const history = useHistory();

  const handleChange = () => {

  }

  const createGame = async () => {
    debugger;
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/new-game`);

      const gameId = response.data.newGameId;
      history.push(`/game/${gameId}`);
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }

  return (
    <Layout>
      <Header>New Game</Header>
      <Content>
        <Row>
          <Col span={12} offset={6}>
            <h2>Options</h2>
            <Divider style={{ borderColor: 'black' }} />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }} >
              <Form.Item
                label="Max. Players"
                name="maxPlayers"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Select defaultValue="6" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="2">2</Option>
                  <Option value="2">3</Option>
                  <Option value="2">4</Option>
                  <Option value="2">5</Option>
                  <Option value="2">6</Option>
                </Select>
              </Form.Item>

              <Form.Item
                  {...tailLayout}
                  name="private"
                  valuePropName="checked"
                  rules={[{ required: true, message: 'Please input your password!' }]} >
                <Checkbox>Private</Checkbox>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password disabled={true} />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Destroy missions</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="button" onClick={createGame}>
                  Create Game
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default NewGame;