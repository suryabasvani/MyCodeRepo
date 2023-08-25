import React, { useState, useEffect } from "react";
import { Col, Row, Divider, Input } from "antd";
import ATemplate from "./Templates/ATemplate";
import BTemplate from "./Templates/BTemplate";
import CTemplate from "./Templates/CTemplate";

const { TextArea } = Input;

const Reports = () => {
  const [selected, setSelected] = useState("1");
  const [triggerHandler, settriggerHandler] = useState(null);
  const [tempSource, settempSource] = useState();

  const [selectState, setState] = useState("");

  const [show, setShow] = useState(true);

  const data = [
    {
      id: 1,
      title: "Template A",
      text: "This is sample content from teamplate A",
    },
    {
      id: 2,
      title: "Template A",
      text: "This is sample content from teamplate B",
    },
    {
      id: 3,
      title: "Template A",
      text: "This is sample content from teamplate C",
    },
  ];

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const triggerTemplateHandler = (msg) => {
    settriggerHandler(msg);
  };

  const showTemplateContent = () => {
    console.log(triggerHandler);
    settempSource(triggerHandler);
  };

  const showTemplatePreview = () => {
    setShow(false);
  };

  const states = [
    { name: "Andhra", languages: ["Telugu", "English", "Hindhi"] },
    { name: "TamilNadu", languages: ["Telugu", "English", "Hindhi", "Tamil"] },
    { name: "Telangana", languages: ["Telugu", "English", "Hindhi"] },
    { name: "Odisha", languages: ["Telugu", "English", "Hindhi", "Orishi"] },
  ];

  let languages = "sample data";

  const stateChangeHandler = (e) => {
    settempSource(e.target.value);
    //console.log(tempSource);
  };

  useEffect(() => {
    const languages = "sample";
    console.log(tempSource);
  }, [tempSource]);

  return (
    <div className="site-card-wrapper">
      <Row gutter={24}>
        <Col span={24}>
          <Row>
            <Col span={4}>
              <select
                className="Space"
                value={selected}
                onChange={(e) => handleChange(e)}
              >
                <option value="1">First Componant</option>
                <option value="2">Second Componant</option>
                <option value="3">Third Componant</option>
              </select>
            </Col>
            <Col span={12}>
              State:{" "}
              <select onChange={(e) => stateChangeHandler(e)}>
                <option value={""}>select</option>
                {states.map((value, index) => (
                  <option value={index} key={index}>
                    {value.name}
                  </option>
                ))}
              </select>
              Languages:
              <select>
                {/* {states[0].languages.map((xx, index) => (
                  <option key={index}>{xx}</option>
                ))} */}
              </select>
              {languages}
            </Col>
          </Row>
          <Divider />
          <Row gutter={16}>
            {selected === "1" ? (
              <ATemplate
                triggerHandler={triggerTemplateHandler}
                show={showTemplatePreview}
              />
            ) : (
              ""
            )}
            {selected === "2" ? (
              <BTemplate
                id={data[1].id}
                title={data[1].title}
                text={data[1].text}
                triggerHandler={triggerTemplateHandler}
              />
            ) : (
              ""
            )}
            {selected === "3" ? (
              <CTemplate
                id={data[2].id}
                title={data[2].title}
                text={data[2].text}
                triggerHandler={triggerTemplateHandler}
              />
            ) : (
              ""
            )}
          </Row>
          <Row>
            {/* <Col>
              <button onClick={showTemplateContent}>Get html</button>
            </Col> */}
            <button onClick={() => showTemplatePreview()}>
              Template Preview
            </button>
          </Row>
        </Col>
        {/* <Col span={12}>
          <TextArea
            placeholder="textarea with clear icon"
            value={tempSource}
            allowClear
            style={{
              height: 200,
            }}
          />
        </Col> */}
      </Row>
    </div>
  );
};

export default Reports;
