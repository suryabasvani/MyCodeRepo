import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Button,
  Typography,
  Divider,
} from "antd";
const { TextArea } = Input;
const { Title } = Typography;

const AddDoctor = () => {
  const { state, dispatch } = useContext(AppContext);
  let navigate = useNavigate();

  const [jsonData, setJsonData] = useState(state.doctors);
  //console.log(jsonData);

  const SubmitFormHandler = (values) => {
    setJsonData({ ...jsonData, ...values });
    console.log(jsonData);
    dispatch({ type: "CREATE_DOCTOR", payload: jsonData });
    console.log(jsonData);
    navigate("/admin/doctors/list");
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3} style={{ color: "#37adf6" }}>
            Add A New Doctor
          </Title>
          <Divider />
        </Col>
        <Col span={24}>
          <Form
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 5 }}
            autoComplete="off"
            onFinish={(values) => {
              SubmitFormHandler(values);
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "email is required",
                },
                {
                  type: "email",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your email" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Phone number is required",
                },
                {
                  len: 10,
                  message: "Phone number must 10 charactors",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your Phone" />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Name is required",
                },
                {
                  whitespace: true,
                },
                {
                  min: 3,
                  message: "It should be more than 2 charactors",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your name" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password is required" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you enterd does not match"
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Qualification"
              name="qualification"
              rules={[
                {
                  required: true,
                },
                {
                  min: 2,
                  message: "It should be minimum 2 charactors ",
                },
              ]}
            >
              <Input placeholder="Type your Qualification" />
            </Form.Item>

            <Form.Item
              label="Specilization"
              name="specilization"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Type your Specilization" />
            </Form.Item>

            <Form.Item name="city" label="City">
              <Select placeholder="Select your city">
                <Select.Option value="Hyderabad">Hyderabad</Select.Option>
                <Select.Option value="Secundrabad">Secundrabad</Select.Option>
                <Select.Option value="vijayawada">vijayawada</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="startTime"
              label="Start Time"
              rules={[{ required: true }]}
            >
              <Select placeholder="Start Time">
                <Select.Option value="10AM">10 AM</Select.Option>
                <Select.Option value="11AM">11 AM</Select.Option>
                <Select.Option value="12AM">12 AM</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="endTime" label="End Time">
              <Select placeholder="End Time">
                <Select.Option value="6PM">6PM</Select.Option>
                <Select.Option value="8PM">8 PM</Select.Option>
                <Select.Option value="10PM">10 PM</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="dob"
              label="Date of Birth"
              rules={[{ required: true }]}
            >
              <DatePicker
                picker="date"
                placeholder="chouse your DBO"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Experience"
              name="experience"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your Experiance" />
            </Form.Item>

            <Form.Item
              label="Surgeon"
              name="surgeon"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Photo" name="photo" rules={[{ type: "url" }]}>
              <Input placeholder="Image URL" />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <TextArea rows={4} placeholder="maxLength is 6" />
            </Form.Item>
            <Form.Item
              name="agreement"
              wrapperCol={{ span: 8 }}
              style={{ textAlign: "center" }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To Procede, you need to accept the rules"
                        ),
                },
              ]}
            >
              <Checkbox>Agree to our terms and conditions</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 7 }} style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddDoctor;
