import React from "react";
import { Button, Col, Row } from "antd";
import { Formik } from "formik";

import {
  FormItem,
  Form,
  Input,
  Select,
  Radio,
  ResetButton,
  SubmitButton,
} from "formik-antd";
import * as Yup from "yup";

const bloodGroupList = [
  { key: "Select an option", value: "" },
  { key: "A-", value: "A-" },
  { key: "A+", value: "A+" },
  { key: "B+", value: "B+" },
  { key: "B-", value: "B-" },
  { key: "O-", value: "O-" },
  { key: "O+", value: "O+" },
];

// const selectMarital = (e) => {
//   console.log(e.target.value);
// };

const addPatientPersonalInfoSchema = Yup.object({
  bloodgroup: Yup.string().required("Required"),
  mstatus: Yup.string().required("Required"),
  gname: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const PatientPersonslInfo = ({ submitHandler, stepBackHandler }) => {
  return (
    <Formik
      initialValues={{
        bloodgroup: "",
        mstatus: "",
        gname: "",
        address: "",
      }}
      validationSchema={addPatientPersonalInfoSchema}
      onSubmit={async (value) => {
        //console.log(value);
        submitHandler(value);
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
                name="bloodgroup"
                label="Blood Group"
                required={true}
                hasFeedback={true}
                showValidateSuccess={true}
              >
                <Select name="bloodgroup" placeholder="Blood Group">
                  {bloodGroupList.map((group) => {
                    return (
                      <Select.Option key={group.key} value={group.value}>
                        {group.value}
                      </Select.Option>
                    );
                  })}
                </Select>
              </FormItem>

              <FormItem
                name="mstatus"
                label="Marital Status"
                required={true}
                hasFeedback={true}
                showValidateSuccess={true}
              >
                <Radio.Group name="mstatus" defaultValue="">
                  <Radio value="single">Single</Radio>
                  <Radio value="married">Married</Radio>
                  <Radio value="unmarried">Unmarried</Radio>
                </Radio.Group>
              </FormItem>

              <FormItem
                name="gname"
                label="Father / Gardian name"
                required={true}
                hasFeedback={true}
                showValidateSuccess={true}
              >
                <Input name="gname" placeholder="Father / Gardian name" />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                name="address"
                label="Address"
                required={true}
                hasFeedback={true}
                showValidateSuccess={true}
              >
                <Input.TextArea rows={4} name="address" />
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
                Go to next step{" "}
              </SubmitButton>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default PatientPersonslInfo;
