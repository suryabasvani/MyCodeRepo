import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../AppContext";
import { Row, Col, Avatar, List, Select, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CartList = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      cart.reduce((acc, curr) => acc + Number(curr.cost) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Row>
      <Col span={18}>
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape="square"
                    size={64}
                    src="../../../images/pill.png"
                  />
                }
                description={
                  <div style={{ color: "#000" }}>
                    <Row>
                      <Col span={8}>{item.name} </Col>
                      <Col span={8}>
                        Cost : &#8377;
                        {item.cost}
                      </Col>
                      <Col span={6}>
                        <Select
                          defaultValue={item.qty}
                          style={{ width: 120 }}
                          onChange={(value) => {
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                id: item.id,
                                qty: value,
                              },
                            });
                          }}
                        >
                          {[...Array(item.stock).keys()].map((x) => (
                            <Select.Option key={x + 1} value={x + 1}>
                              {x + 1}
                            </Select.Option>
                          ))}
                        </Select>
                      </Col>
                      <Col span={2}>
                        <DeleteOutlined
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col span={5} style={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
        <h3>Subtotal {cart.length} Items </h3>
        <h2>Subtotal cost : &#8377;{totalCost} </h2>
        <Button type="primary" block disabled={!cart.length}>
          Proceed to checkout
        </Button>
      </Col>
    </Row>
  );
};

export default CartList;
