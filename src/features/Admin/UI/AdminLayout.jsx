import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AdminMenu from "./AdminMenu";
import TopMenu from "../../../common/UI/Top_Menu";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout>
      <Sider>
        <div
          className="logo"
          style={{ height: "32px", margin: "16px", background: "#ffffff4d" }}
        >
          {/* <DeploymentUnitOutlined style={{ color: "#0792ae", fontSize: 35 }} /> */}
        </div>
        <AdminMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <TopMenu />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
