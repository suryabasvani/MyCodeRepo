import React, { useState } from "react";
import { Col, Row, Button, Switch } from "antd";
import { Formik } from "formik";
import {
  Form,
  FormItem,
  Input,
  ResetButton,
  SubmitButton,
  Select,
} from "formik-antd";
import * as Yup from "yup";

const medicalInfoSchama = Yup.object({
  bpyes: Yup.string(),
  glucose: Yup.string(),
  temparature: Yup.string().required("Required"),
  appointment: Yup.string().required("Required"),
  doctor: Yup.string().required("Required"),
  psummary: Yup.string().required("Required"),
});

const PatientMedicalInfo = ({ submitHandler, stepBackHandler }) => {
  const [showbp, setshowbp] = useState(false);
  const [showSuger, setShowSuger] = useState(false);

  const onChangeBp = (checked) => {
    checked ? setshowbp(true) : setshowbp(false);
  };

  const onChangeSuger = (checked) => {
    checked ? setShowSuger(true) : setShowSuger(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          bpyes: "",
          glucose: "",
          temparature: "",
          appointment: "",
          doctor: "",
          psummary: "",
        }}
        validationSchema={medicalInfoSchama}
        onSubmit={async (values) => {
          //console.log(values);
          submitHandler(values);
        }}
      >
        {(formik) => (
          <Form
            autoComplete="off"
            labelCol={{ lg: 23 }}
            wrapperCol={{ lg: 23 }}
            layout="vertical"
            style={{ textAlign: "left" }}
          >
            <Row>
              <Col span={6}>
                <FormItem
                  name="bpyes"
                  label="Blood Pressure"
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Switch
                    onChange={onChangeBp}
                    style={{ marginRight: "10px" }}
                  />
                  {showbp ? (
                    <Input name="bpyes" style={{ width: "70%" }} />
                  ) : (
                    "No BP"
                  )}
                </FormItem>
                <FormItem
                  name="glucose"
                  label="Glucose"
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Switch
                    onChange={onChangeSuger}
                    style={{ marginRight: "10px" }}
                  />
                  {showSuger ? (
                    <Input name="glucose" style={{ width: "70%" }} />
                  ) : (
                    "Glucose"
                  )}
                </FormItem>
                <FormItem
                  name="temparature"
                  label="Temparature"
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Input
                    name="temparature"
                    placeholder="temparature"
                    style={{ width: "80%" }}
                  ></Input>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="appointment"
                  label="Appointment"
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Select name="appointment" placeholder="Appointment">
                    <Select.Option key="1">12 PM</Select.Option>
                    <Select.Option key="2">13 PM</Select.Option>
                    <Select.Option key="3">14 PM</Select.Option>
                  </Select>
                </FormItem>

                <FormItem
                  name="doctor"
                  label="Doctor"
                  required={true}
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Select name="doctor" placeholder="Doctor Name">
                    <Select.Option key="1">Dr. Mark</Select.Option>
                    <Select.Option key="2">Dr. Rao</Select.Option>
                    <Select.Option key="3">Dr. Surya</Select.Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem name="psummary" label="Patient Summary">
                  <Input.TextArea rows={5} name="psummary" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button onClick={stepBackHandler}>Back</Button>
                <ResetButton>Reset</ResetButton>
                <SubmitButton
                  onClick={formik.submitForm}
                  disabled={!formik.isValid}
                >
                  Submit
                </SubmitButton>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PatientMedicalInfo;
