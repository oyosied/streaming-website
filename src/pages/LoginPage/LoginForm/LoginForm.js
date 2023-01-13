import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../utils/store/AuthContext.js";

const LoginForm = (props) => {
  const { login } = useContext(UserContext);

  let navigate = useNavigate();
  const onFinish = (values) => {
    login({ user: { logged: true } });
    //console.log("Success:", values);
    navigate("/home");
  };
  const onFinishFailed = (errorInfo) => {
    //console.log("Failed:", errorInfo);
  };
  const onRegister = () => {
    let path = `/register`;
    navigate(path);
  };
  return (
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Row>
          <Col span={10}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Col>
          <Col>
            <Button type="default" onClick={onRegister}>
              Register
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
