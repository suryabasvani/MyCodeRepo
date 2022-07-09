import React from "react";
import { Link } from "react-router-dom";
import { LaptopOutlined, AimOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

function NavLink({ to, className, ...rest }) {
  return <Link className="surya" to={to} {...rest} />;
}

const LeftMenu = () => {
  return (
    <Row>
      <Col span={24} style={{ ...styles.menu_item }} className="active">
        <LaptopOutlined /> Dashboard
        {/* <NavLink>
          test
        </NavLink> */}
      </Col>
      <Col span={24} style={{ ...styles.menu_item }}>
        <AimOutlined /> Appointments
      </Col>
      <Col span={24} style={{ ...styles.menu_item }}>
        <LaptopOutlined /> Patients
      </Col>
      <Col span={24} style={{ ...styles.menu_item }}>
        <LaptopOutlined /> Operations
      </Col>
      <Col span={24} style={{ ...styles.menu_item }}>
        <LaptopOutlined /> Qualification
      </Col>
    </Row>
  );
};

const styles = {
  menu_item: {
    padding: "7px 10px",
    color: "white",
    marginBottom: 2,
  },
};

export default LeftMenu;
