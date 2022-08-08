import React from "react";
import { Col, Row } from "antd";
import UserSelect from "../../common/components/UserSelect";
import Cart from "../../features/Admin/Pharmacy/Cart";

const TopMenu = () => {
  return (
    <Row>
      <Col span={12}> Admin Masater layout</Col>
      <Col span={8}>
        <UserSelect />
      </Col>
      <Col span={4}>
        <Cart />
      </Col>
    </Row>
  );
};

export default TopMenu;
