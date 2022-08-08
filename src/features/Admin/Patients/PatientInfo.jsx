import React from "react";
import { Col, Row, Button } from "antd";
import { Formik } from "formik";
import {
  FormItem,
  Form,
  Input,
  Select,
  DatePicker,
  SubmitButton,
  ResetButton,
} from "formik-antd";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const addPatientInfoSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Name should be min 3 charactors")
    .required("Required"),
  email: Yup.string().email("add valid email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  dob: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
});

let myage = "";
let calcAge = (date, dateString) => {
  const ageDifMs = Date.now() - new Date(dateString).getTime();
  const ageDate = new Date(ageDifMs);
  myage = Math.abs(ageDate.getUTCFullYear() - 1970);
};

//const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const PatientInfo = ({ submitHandler, stepBackHandler }) => {
  console.log(stepBackHandler.setPatientData);
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
        }}
        validationSchema={addPatientInfoSchema}
        // onSubmit={(values) => {
        //   submitHandler(values);
        //   // console.log(JSON.stringify(values, null, 2));
        // }}
        onSubmit={async (values) => {
          //await sleep(500);
          submitHandler(values);
          //alert(JSON.stringify(values, null, 2));
          //console.log(JSON.stringify(values, null, 2));
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
              <Col span={12}>
                <FormItem
                  name="fullName"
                  label="Full Name"
                  required={true}
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Input name="fullName" placeholder="Full Name" />
                </FormItem>

                <FormItem
                  name="email"
                  label="Email"
                  required={true}
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Input name="email" placeholder="email" />
                </FormItem>

                <FormItem
                  name="phone"
                  label="Phone Number"
                  required={true}
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Input name="phone" placeholder="Phone Number" />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  name="dob"
                  label="Date of Birth"
                  required={true}
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <DatePicker
                    name="dob"
                    placeholder="Select you date of birth"
                    style={{ width: "70%" }}
                    onChange={(date, dateString) => calcAge(date, dateString)}
                  />{" "}
                  : {myage} Years
                </FormItem>

                <FormItem
                  name="gender"
                  label="Gender"
                  required={true}
                  hasFeedback={true}
                  showValidateSuccess={true}
                >
                  <Select name="gender">
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button disabled>Back</Button>
                <ResetButton>Reset</ResetButton>
                <SubmitButton
                  onClick={formik.submitForm}
                  disabled={!formik.isValid}
                >
                  Go To Personal informaiont
                </SubmitButton>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PatientInfo;
