import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../AppContext";
import Filters from "./Filters";
import SingleItem from "./SingleItem";
import { Row, Col, Input, Button } from "antd";

const Pharmacy = () => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    setPhrma(state.Pharmacy);
  }, [state.Pharmacy]);

  const [Phrma, setPhrma] = useState(state.Pharmacy);

  return (
    <div className="site-card-wrapper market">
      <Row>
        <Col span={23}>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={9}>
              <Input
                placeholder="search for medicine"
                style={{ width: "75%" }}
              />
              <Button type="primary">Search</Button>
            </Col>
            <Col span={15}>
              <Filters />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={16}>
        {Phrma.map((item) => {
          return <SingleItem item={item} key={item.id} />;
        })}
      </Row>
    </div>
  );
};

export default Pharmacy;
