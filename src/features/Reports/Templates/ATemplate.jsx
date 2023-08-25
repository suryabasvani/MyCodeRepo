import React, { useRef, useEffect, useState } from "react";
import Item from "./item";
import { Col, Row, Divider, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ATemplate = ({ triggerHandler, show }) => {
  const [getText, setText] = useState("");
  const [getValuesSample, setValuesSample] = useState("");

  const refTemplate = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  useEffect(() => {
    let template = refTemplate.current.outerHTML;
    triggerHandler(template);
  }, []);

  const data = [
    {
      id: "e1",
      title: "title one",
      bodycontent: "sample text",
    },
    {
      id: "e2",
      title: "title two",
      bodycontent: "sample text",
    },
    {
      id: "e3",
      title: "title three",
      bodycontent: "sample text",
    },
  ];

  return (
    <Row ref={refTemplate}>
      <Col>
        {data.map((t) => (
          <Item title={t.title} key={t.id} bodycontent={t.bodycontent} />
        ))}
      </Col>
      {/* <Col span={12}>
        <ReactQuill
          theme="snow"
          value={getText}
          onChange={setText}
          modules={modules}
        />
      </Col>
      <Col span={12} dangerouslySetInnerHTML={{ __html: getText }} /> */}
      {show && "sample text--"}
    </Row>
  );
};

export default ATemplate;
