import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";

const Nurseslist = () => {
  let navigate = useNavigate();

  const addNurseHandler = () => {
    navigate("/admin/nurses/add");
  };

  return (
    <>
      <Row>
        <Col span={12}>Patients</Col>
        <Col span={12}>
          <Button
            style={{ color: "#0b84ce" }}
            onClick={() => {
              addNurseHandler();
            }}
          >
            {" "}
            Add Patient
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Nurseslist;
