import React from "react";
import { Button, Checkbox, Form, Input, Col , Row} from "antd";
import CenteredDiv from "../utils/components/CenteredDiv";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    props.setUser({logged:true});
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onRegister = () => {
    let path = `/register`;
    navigate(path);
  };
  return (
    <CenteredDiv>
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
    </CenteredDiv>
  );
};
export default LoginForm;
