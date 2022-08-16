import React, { useState, useContext } from "react";
import { AppContext } from "../../../AppContext";
import { Radio, Checkbox, Button } from "antd";

const Filters = () => {
  const { productState, productDispatch } = useContext(AppContext);

  const [sortValue, setsortValue] = useState("asc");

  const onChange = (e) => {
    //console.log("radio checked", e.target.value);
    setsortValue(e.target.value);
    var sortvalue = e.target.value;
    if (sortvalue === "asc") {
      productDispatch({
        type: "SORY_BY_PRICE",
        payload: "lowToHight",
      });
    } else if (sortvalue === "dse") {
      productDispatch({
        type: "SORY_BY_PRICE",
        payload: "hightToLow",
      });
    }
  };

  const stockFilter = (e) => {
    let checked = `${e.target.checked}`;
    if (checked) {
      productDispatch({
        type: "FILTER_BY_STOCK",
      });
    }
  };

  const fastDelivery = (e) => {
    let checked = `${e.target.checked}`;
    if (checked) {
      productDispatch({
        type: "FILTER_BY_DELIVERY",
      });
    }
  };

  const clearFilterHandler = () => {
    productDispatch({
      type: "CLEAR_FILTERS",
    });
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={sortValue}>
        <Radio value="asc">Ascending</Radio>
        <Radio value="dse">Decending</Radio>
      </Radio.Group>
      <Checkbox onChange={stockFilter}>Include Out Of Stock</Checkbox>
      <Checkbox onChange={fastDelivery}>Fast Delivery</Checkbox>
      <Button type="text" onClick={clearFilterHandler}>
        Clear Filter
      </Button>
    </>
  );
};

export default Filters;
