import React, { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, Slider } from "antd";
import PatientInfo from "./PatientInfo";
import PatientPersonslInfo from "./PatientPersonslInfo";
import PatientMedicalInfo from "./PatientMedicalInfo";
import { AppContext } from "../../../AppContext";

const AddPatient = (prpos) => {
  const { dispatch } = useContext(AppContext);
  const [currentpage, setCurrentpage] = useState(0);
  const [range, setRange] = useState(0);
  const [patientData, setPatientData] = useState();

  const navigate = useNavigate();

  const FormTitles = [
    "Basic Information",
    "Personal informaiont",
    "Mdeical History",
  ];

  const nextStepMethod = useCallback(
    (values) => {
      setPatientData({ ...patientData, ...values });
      setRange((range) => range + 33.33);
      setCurrentpage(currentpage + 1);
    },
    [patientData, currentpage]
  );

  const prevStepMethod = useCallback(
    (values) => {
      setCurrentpage(currentpage - 1);
      setPatientData({ ...patientData, ...values });
      setRange((range) => range - 33.33);
    },
    [currentpage]
  );

  const SubmitNewForm = (values) => {
    setPatientData({ ...patientData, ...values });
    dispatch({ type: "CREATE_PATIENT_FORM", payload: patientData });
    navigate("/admin/patients/list");
  };

  const pageDisplayinfo = () => {
    if (currentpage === 0) {
      return (
        <PatientInfo
          submitHandler={(values) => {
            nextStepMethod(values);
          }}
          stepBackHandler={prevStepMethod}
        />
      );
    } else if (currentpage === 1) {
      return (
        <PatientPersonslInfo
          submitHandler={(values) => {
            nextStepMethod(values);
          }}
          stepBackHandler={prevStepMethod}
        />
      );
    } else if (currentpage === 2) {
      return (
        <PatientMedicalInfo
          submitHandler={(values) => {
            SubmitNewForm(values);
          }}
          stepBackHandler={prevStepMethod}
        />
      );
    }
  };

  const marks = {
    0: "Patient Info",
    33.33: "Persons Info",
    66.33: "Medical Info",
    100: "Info",
  };

  return (
    <Row>
      <Col
        span={24}
        style={{
          padding: "1%",
          borderRadius: "5px",
          // boxShadow:
          //   "0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017",
        }}
      >
        <h3 style={{ color: "#1890ff" }}>{FormTitles[currentpage]}</h3>

        <div className="progressbar">
          <Slider marks={marks} value={range} />
        </div>

        {pageDisplayinfo()}
      </Col>
    </Row>
  );
};

export default AddPatient;
