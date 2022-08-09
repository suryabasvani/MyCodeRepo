import React from "react";
import { Formik } from "formik";
import { Row, Col } from "antd";
import {
  FormItem,
  Input,
  SubmitButton,
  ResetButton,
  Form,
  Select,
  DatePicker,
} from "formik-antd";
import * as Yup from "yup";

const dropdownOptions = [
  { key: "Select an option", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const addNewUserSchema = Yup.object({
  userName: Yup.string().min(5).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  qualification: Yup.string().required("Required"),
  dateOfJoining: Yup.date().min(new Date("01-01-2022")).required("Required"),
  gender: Yup.string().required("Required"),
  imageUrl: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const AddNurse = () => {
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          phone: "",
          qualification: "",
          dateOfJoining: new Date().toISOString(),
          dateOfBirth: new Date().toISOString(),
          gender: "",
          imageUrl: "",
          address: "",
        }}
        validationSchema={addNewUserSchema}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Form
            labelCol={{ lg: 5 }}
            wrapperCol={{ lg: 10 }}
            layout="horizontal"
            autoComplete="off"
          >
            <FormItem
              name="userName"
              label="User Name"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Input name="userName" placeholder="Type your Name" />
            </FormItem>

            <FormItem
              name="email"
              label="Email"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Input name="email" placeholder="Type your email" />
            </FormItem>

            <FormItem
              name="password"
              label="Password"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Input.Password
                name="password"
                placeholder="Type your password"
              />
            </FormItem>

            <FormItem
              name="phone"
              label="Phone"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Input name="phone" placeholder="1234-345-678" />
            </FormItem>

            <FormItem
              name="qualification"
              label="Qualification"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Select name="qualification">
                {dropdownOptions.map((option) => {
                  return (
                    <Select.Option key={option.value} value={option.value}>
                      {option.key}
                    </Select.Option>
                  );
                })}
              </Select>
            </FormItem>

            <FormItem
              name="dateOfJoining"
              label="Date of joining"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <DatePicker name="dateOfJoining" placeholder="Date of joining" />
            </FormItem>

            <FormItem
              name="dateOfBirth"
              label="Date of Birth"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <DatePicker name="dateOfBirth" placeholder="Date of Birth" />
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

            <FormItem
              name="imageUrl"
              label="User Photo"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Input name="imageUrl" placeholder="Image URL" />
            </FormItem>

            <FormItem
              name="address"
              label="Address"
              required={true}
              hasFeedback={true}
              showValidateSuccess={true}
            >
              <Input.TextArea rows={4} name="address" />
            </FormItem>
            <Row>
              <Col span={12} offset={6}>
                <ResetButton>Reset</ResetButton>
                <SubmitButton type="primary" disabled={false}>
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

export default AddNurse;
