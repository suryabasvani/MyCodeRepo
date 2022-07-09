import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu>
    <Menu.Item key={"dashboard"}>
      <Link to="/admin/dashboard">Admin</Link>
    </Menu.Item>
    <Menu.Item key={"doctor"}>
      <Link to="/doctor/details">Doctor</Link>
    </Menu.Item>
    <Menu.Item key={"accounts"}>
      <Link to="/accounts/details">Accounts</Link>
    </Menu.Item>
  </Menu>
);

const UserSelect = () => {
  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <UserOutlined /> Surya <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default UserSelect;
