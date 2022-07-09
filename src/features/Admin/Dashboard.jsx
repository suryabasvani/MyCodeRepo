import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Divider } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Notifications from "../../common/components/Notifications";

const Dashboard = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Link to="/admin/doctors/list">
            <div style={{ ...styles.dashoard_item }}>
              <UserAddOutlined style={{ ...styles.dsahboard_icon }} />
              <span style={{ ...styles.item_head }}>Doctors</span>
              <div style={{ ...styles.item_description }}>Available : 20</div>
            </div>
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          <Link to="/admin/nurses/list">
            <div style={{ ...styles.dashoard_item }}>
              <UserAddOutlined style={{ ...styles.dsahboard_icon }} />
              <span style={{ ...styles.item_head }}>Nurses</span>
              <div style={{ ...styles.item_description }}>Available : 40</div>
            </div>
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          <Link to="/admin/patients/list">
            <div style={{ ...styles.dashoard_item }}>
              <UserAddOutlined style={{ ...styles.dsahboard_icon }} />
              <span style={{ ...styles.item_head }}>Patients</span>
              <div style={{ ...styles.item_description }}>
                Patients List : 20
              </div>
            </div>
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          <Link to="/admin/accounts/list">
            <div style={{ ...styles.dashoard_item }}>
              <UserAddOutlined style={{ ...styles.dsahboard_icon }} />
              <span style={{ ...styles.item_head }}>Accountas</span>
              <div style={{ ...styles.item_description }}>accountants : 6</div>
            </div>
          </Link>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div style={{ ...styles.appointments }}>appointments</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={{ ...styles.notifications }}>
            <Notifications />
          </div>
        </Col>
      </Row>
    </>
  );
};

const styles = {
  dashoard_item: {
    background: "#37adf6",
    padding: "8px",
    borderRadius: "5px",
    color: "#ffffff",
  },
  dsahboard_icon: {
    fontSize: "40px",
    color: "#ffffff",
  },
  item_head: {
    fontSize: "25px",
    marginLeft: "10px",
  },
  item_description: {
    widtth: "100%",
    textAlign: "center",
    borderTop: "solid 1px #afd4eb",
  },
  appointments: {
    backgroundColor: "#f7f7f7",
    height: "200px",
    padding: "2%",
    border: "dotted 1px #37adf6",
    borderRadius: "10px",
  },
  notifications: {
    backgroundColor: "#f7f7f7",
    height: "400px",
    padding: "2%",
    border: "dotted 1px #37adf6",
    borderRadius: "10px",
    overFlow: "hidden",
  },
};

export default Dashboard;
