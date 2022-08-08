import React, { useState } from "react";
import { Radio, Checkbox, Button } from "antd";

const Filters = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Ascending</Radio>
        <Radio value={2}>Decending</Radio>
      </Radio.Group>
      <Checkbox>Include Out Of Stock</Checkbox>
      <Checkbox>Fast Delivery</Checkbox>
      <Button type="text">Clear Filter</Button>
    </>
  );
};

export default Filters;
