import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../AppContext";
import ProductSearch from "./ProductSearch";
import Filters from "./Filters";
import SingleItem from "./SingleItem";
import { Row, Col, Input, Button } from "antd";

const Pharmacy = () => {
  const {
    state: { Pharmacy },
    productState: { byStock, sort, byFastDelivery, searchQuery },
  } = useContext(AppContext);

  console.log(searchQuery);

  const transformProducts = () => {
    let sortedProducts = Pharmacy;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHight" ? a.cost - b.cost : b.cost - a.cost
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.stock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastdelivery);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => {
        prod.name.toLowerCase().includes(searchQuery);
      });
    }

    return sortedProducts;
  };

  return (
    <div className="site-card-wrapper market">
      <Row>
        <Col span={23}>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={9}>
              <ProductSearch />
            </Col>
            <Col span={15}>
              <Filters />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={16}>
        {transformProducts().map((item) => {
          return <SingleItem item={item} key={item.id} />;
        })}
      </Row>
    </div>
  );
};

export default Pharmacy;
