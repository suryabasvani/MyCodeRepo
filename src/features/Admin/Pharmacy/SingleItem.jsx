import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";

import { Row, Col, Card, Button, Rate } from "antd";

const { Meta } = Card;

const SingleItem = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  return (
    <>
      <Col span={6} key={item.id} style={{ marginBottom: "15px" }}>
        <Card
          hoverable
          style={{
            width: "100%",
            borderRadius: "8px",
            borderColor: "#cdc8c8",
          }}
          title={
            <Row>
              <Col span={24} style={{ textAlign: "center" }}>
                <img
                  style={{ width: "50px" }}
                  src={require("../../../images/pill.png")}
                  alt="Pill"
                />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                {item.name}
              </Col>
            </Row>
          }
        >
          <Meta
            title={
              <Row>
                <Col span={24}>
                  <span className="comment-action">MRP : </span>
                  <span
                    key="comment-basic-reply-to"
                    style={{
                      textDecoration: "line-through",
                      margin: "0 5px",
                    }}
                  >
                    {item.mrp} Rs
                  </span>
                  |
                  <span className="comment-action" style={{ margin: "0 5px" }}>
                    Off {item.discount}%
                  </span>
                  |
                  <span className="comment-action" style={{ margin: "0 5px" }}>
                    Cost {((100 * item.discount) / item.mrp).toFixed(2)}
                    Rs
                  </span>
                  <br />
                  <label>
                    {item.fastdelivery ? "Fast Delivery" : " 4 days delivery"}
                  </label>
                  <br />
                  <label>
                    <Rate value={item.rateing} />
                  </label>
                </Col>
                <Col span={12}>
                  {cart.some((p) => p.id === item.id) ? (
                    <Button
                      type="primary"
                      danger
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      Remove from cart
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      disabled={!item.stock}
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        })
                      }
                    >
                      {!item.stock ? "Out of Stock" : "Add to cart"}
                    </Button>
                  )}
                </Col>
                <Col span={12}></Col>
              </Row>
            }
          ></Meta>
        </Card>
      </Col>
    </>
  );
};

export default SingleItem;
