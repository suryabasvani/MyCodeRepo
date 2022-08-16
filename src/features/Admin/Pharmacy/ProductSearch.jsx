import React, { useContext, useState } from "react";
import { AppContext } from "../../../AppContext";
import { Input, Button } from "antd";

const ProductSearch = () => {
  const {
    productState: { searchQuery },
    productDispatch,
  } = useContext(AppContext);
  const [searchItem, setSearchItem] = useState("");

  const searchItemHandlerChange = (e) => {
    setSearchItem(e.target.value);
  };

  const productSearch = () => {
    productDispatch({
      type: "FILTER_BY_SEARCH",
      payload: searchItem,
    });
  };

  return (
    <>
      <Input
        placeholder="search for medicine"
        onChange={searchItemHandlerChange}
        style={{ width: "75%" }}
        value={searchItem}
      />
      <Button type="primary" onClick={productSearch}>
        Search
      </Button>
    </>
  );
};

export default ProductSearch;
