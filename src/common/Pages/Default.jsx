import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Login from "../components/Login";

const { Header, Footer, Content } = Layout;

const DefaultPage = () => {
  return (
    <>
      <Layout>
        <Header>
          <div style={{ ...styles.logo }}>LOGO</div>
          <div style={{ ...styles.rightmenu }}>
            <span> Surya Basvani </span>
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
              icon={<UserOutlined />}
            />
          </div>
        </Header>
        <Content
          style={{ padding: "10px 100px", height: "calc(100vh - 135px)" }}
        >
          <Login />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

const styles = {
  logo: {
    float: "left",
    width: "120px",
    height: "31px",
    margin: "16px 24px 16px 0",
    background: "rgba(255, 255, 255, 0.3)",
    color: "white",
    lineHeight: "31px",
    textAlign: "center",
  },
  rightmenu: {
    width: "auto",
    float: "right",
    color: "white",
  },
};

export default DefaultPage;
