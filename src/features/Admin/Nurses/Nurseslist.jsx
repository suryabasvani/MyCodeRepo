import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Input, Select, Divider } from "antd";
import { AppContext } from "../../../AppContext";

import AllNursesList from "./AllNursesList";

const { Option } = Select;

const Nurseslist = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const [NurselsList, setNurselsList] = useState(state.Nurses);

  const addNurseHandler = () => {
    navigate("/admin/nurses/add");
  };

  const SearchFormHandler = (values) => {
    console.log(values);
    dispatch({ type: "SEARCH_NURSE", payload: state.Nurses });
  };

  const shiftsList = [
    { id: 0, name: "All Shift" },
    { id: 1, name: "Ragular Shift" },
    { id: 2, name: "First Shift" },
    { id: 3, name: "Second Shift" },
  ];

  const onShiftChange = (status) => {
    let list = state.Nurses.filter((nurse) => {
      return nurse["shift"] === status;
    });
    if (status === 0) {
      list = state.Nurses;
    }
    console.log(list);
    setNurselsList(list);
  };

  return (
    <>
      <Row>
        <Col span={15}>
          <Form
            onFinish={(values) => {
              SearchFormHandler(values);
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
              label="Search :"
              name="uname"
              style={{ display: "inline-flex" }}
            >
              <Input name="uname" placeholder="Enter Nurse name" />
            </Form.Item>
            <Form.Item name="duty" style={{ display: "inline-flex" }}>
              <Select placeholder="Select duty type">
                <Select.Option value="0">Ragular </Select.Option>
                <Select.Option value="1">First Shift </Select.Option>
                <Select.Option value="2">Second Shift</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ display: "inline-flex", marginLeft: "1%" }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={9} style={{ textAlign: "right" }}>
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#009cfc",
              borderRadius: 5,
            }}
            onClick={() => {
              addNurseHandler();
            }}
          >
            Add Nurse
          </Button>
          <Select defaultValue="General" onChange={onShiftChange}>
            {shiftsList.map((shift) => {
              return (
                <Option key={shift.id} value={shift.id}>
                  {shift.name}
                </Option>
              );
            })}
          </Select>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <AllNursesList nurseslist={NurselsList} />
        </Col>
      </Row>
    </>
  );
};

export default Nurseslist;
