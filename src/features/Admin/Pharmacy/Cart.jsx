import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { AppContext } from "../../../AppContext";
import { Avatar, List, Button } from "antd";

const Cart = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const menu = (
    <Menu style={{ width: "200px" }}>
      {cart.length > 0 ? (
        <Menu.Item key={"dashboard"}>
          <List
            style={{ display: "block" }}
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
          <Button
            type="primary"
            block
            onClick={() => {
              navigate("pharmacy/cart");
            }}
          >
            View All
          </Button>
        </Menu.Item>
      ) : (
        <Menu.Item key={"dashboard"}>Noitems selected</Menu.Item>
      )}
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a
          onClick={(e) => e.preventDefault()}
          style={{ lineHeight: "44px", borderRadius: "5px" }}
        >
          <Space
            style={{
              padding: "0 10px",
              backgroundColor: "#1890ff",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <ShoppingCartOutlined style={{ fontSize: "17px" }} /> {cart.length}
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default Cart;
