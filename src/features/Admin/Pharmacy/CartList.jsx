import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { Row, Col, Avatar, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CartList = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);
  return (
    <Row>
      <Col span={18}>
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="../../../images/pill.png" />}
                description={
                  <div>
                    <span>{item.name}</span>
                    <span
                      className="comment-action"
                      style={{ margin: "0 5px", color: "black" }}
                    >
                      : {((100 * item.discount) / item.mrp).toFixed(2)}
                      Rs
                    </span>
                    <DeleteOutlined
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    />
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col span={4}>Sub Total 2 </Col>
    </Row>
  );
};

export default CartList;
