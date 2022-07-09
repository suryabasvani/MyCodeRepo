import React from "react";
import { Col, Row } from "antd";
import UserSelect from "../../common/components/UserSelect";

const TopMenu = () => {
  return (
    <Row>
      <Col span={12}> Admin Masater layout</Col>
      <Col span={12}>
        <UserSelect />
      </Col>
    </Row>
  );
};

export default TopMenu;
