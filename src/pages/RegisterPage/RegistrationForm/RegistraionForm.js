import { Button, Col, Form, Input, Row, Select } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiManagerContext } from "../../../utils/store/ApiMangerContext";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const RegistrationForm = () => {
  const [error, setError] = useState();
  const { post } = useContext(ApiManagerContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    delete values.confirm;
    const register_res = await post("/users/register", values);
    if (!register_res.error) {
      console.log("Registration sucessfull");
      navigate("/login");
    } else {
      console.log("Registration failed", register_res);
      setError(register_res.response.message);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        validateStatus={error ? "error" : ""}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Row>
          <Col span={10}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Col>
          <Col>
            <Link to="/login">Already a user ?</Link>
          </Col>
        </Row>
      </Form.Item>
      {error && (
        <Form.Item>
          <Row style={{ color: "red" }}>{error}</Row>
        </Form.Item>
      )}
    </Form>
  );
};
export default RegistrationForm;
