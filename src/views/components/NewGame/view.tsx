import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Layout } from 'antd';

import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Divider } from 'antd';

import i18n from './i18n';

const { Header, Footer, Content } = Layout;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export interface Props {
  language: string;
}

const NewGame = (props: Props) => {
  const history = useHistory();

  const handleChange = () => {

  }

  const createGame = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/new-game`);

      const gameId = response.data.newGameId;
      history.push(`/game/${gameId}`);
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }

  const language: 'en' | 'es' = props.language as ('en' | 'es');

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>{i18n.newGame[language]}</h1>
      </Header>
      <Content>
        <Row>
          <Col span={12} offset={6} style={{ backgroundColor: 'white', padding: '10px' }}>
            <h2>Options</h2>
            <Divider style={{ borderColor: 'black' }} />

            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true, turnTime: 3 }} >
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
                label="Turn Time (minutes)"
                name="turnTime"
                rules={[{ required: true, message: 'Please input time per turn!' }]}
              >
                <Input />
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
      <Footer>&nbsp;</Footer>
    </Layout>
  );
};

export default NewGame;