import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col } from "antd";

const Patients = () => {
  let navigate = useNavigate();

  const addPatientHandler = () => {
    navigate("/admin/patients/add");
  };

  return (
    <>
      <Row>
        <Col span={12}>Patients</Col>
        <Col span={12}>
          <Button
            style={{ color: "#0b84ce" }}
            onClick={() => {
              addPatientHandler();
            }}
          >
            Patient Registration
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Patients;
