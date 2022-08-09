import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Divider, Input } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  const changHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!loginData.username == "" && !loginData.password == "") {
      navigate("/admin/dashboard");
    } else {
      alert("user name and password is must");
    }
  };

  return (
    <Row justify="center">
      <Col
        span={10}
        style={{
          border: "solid 1px #cbcdcf",
          borderRadius: "5px",
          padding: "10px 50px",
        }}
      >
        <Divider orientation="right" plain>
          User Login
        </Divider>
        <form onSubmit={formSubmitHandler}>
          <Input
            size="large"
            value={username}
            name="username"
            placeholder="User Name"
            prefix={<UserOutlined />}
            onChange={changHandler}
          />

          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<UnlockOutlined />}
            style={{ margin: "10px 0" }}
            value={password}
            name="password"
            onChange={changHandler}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="submit"
              name="submit"
              style={{
                justifyContent: "center",
                backgroundColor: "#40a9ff",
                color: "#fff",
              }}
            />
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default Login;
