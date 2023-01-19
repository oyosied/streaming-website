import React, { useState, useContext } from "react";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../utils/store/AuthContext.js";
import { ApiManagerContext } from "../../../utils/store/ApiMangerContext.js";

const LoginForm = (props) => {
  const [error, setError] = useState(false);

  const { login } = useContext(UserContext);
  // eslint-disable-next-line
  const { post } = useContext(ApiManagerContext);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    const login_res = await post("/users/login", {
      email: values.email,
      password: values.password,
    });
    if (!login_res.error) {
      login(login_res.response.data.token);
      navigate("/home");
    } else {
      setError(true);
    }
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
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
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
      {error && (
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Row>
            <div style={{ color: "red" }}>{"Email or password is wrong!"}</div>
          </Row>
        </Form.Item>
      )}
    </Form>
  );
};
export default LoginForm;
