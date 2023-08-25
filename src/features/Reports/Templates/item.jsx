import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Item = ({ title, bodycontent }) => {
  const [getText, setText] = useState("");
  const [toggle, setToggle] = useState(true);

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

  let defaultText = "sample text";

  //   const showRichText = () => {
  //     //console.log(getText);
  //     //defaultText = render(<p dangerouslySetInnerHTML={{ __html: getText }} />);
  //     defaultText = "updated text";
  //   };

  return (
    <Row gutter={24}>
      <Col span={12}>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: getText }} />
      </Col>
      {toggle && (
        <Col span={12}>
          <ReactQuill
            theme="snow"
            value={getText}
            onChange={setText}
            modules={modules}
          />
          <Button onClick={() => setToggle(!toggle)}>save</Button>
        </Col>
      )}
    </Row>
  );
};

export default Item;
