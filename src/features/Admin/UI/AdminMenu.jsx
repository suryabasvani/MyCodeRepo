import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LaptopOutlined,
  AimOutlined,
  FileAddFilled,
  CrownFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";

function NavLink({
  to,
  className,
  activeclassname,
  inactiveclassname,
  ...rest
}) {
  const location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames = isActive ? `${activeclassname}` : `${inactiveclassname}`;
  return <Link className={allClassNames} to={to} {...rest} />;
}

const AdminMenu = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Row>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{ active: /dashboard/.test(pathname) ? true : false }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/dashboard"
        >
          <LaptopOutlined /> Dashboard
        </NavLink>
      </Col>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{ active: /doctors/.test(pathname) ? true : false }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/doctors/list"
        >
          <AimOutlined /> Doctors
        </NavLink>
      </Col>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{
          active: /nurses/.test(pathname) ? true : false,
        }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/nurses/list"
        >
          <CrownFilled /> Nurses
        </NavLink>
      </Col>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{
          active: /accounts/.test(pathname) ? true : false,
        }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/accounts/list"
        >
          <FileAddFilled />
          Accounts
        </NavLink>
      </Col>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{
          active: /patients/.test(pathname) ? true : false,
        }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/patients/list"
        >
          <FileAddFilled /> Patients
        </NavLink>
      </Col>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{
          active: /pharmacy/.test(pathname) ? true : false,
        }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/pharmacy/list"
        >
          <FileAddFilled /> Pharmacy
        </NavLink>
      </Col>
      <Col
        span={24}
        style={{ ...styles.menu_item }}
        className={{
          active: /reports/.test(pathname) ? true : false,
        }}
      >
        <NavLink
          activeclassname="menu_item_active"
          inactiveclassname="menu_item_inactive"
          to="/admin/reports/list"
        >
          <FileAddFilled /> Reports
        </NavLink>
      </Col>
    </Row>
  );
};

const styles = {
  menu_item: {
    padding: "7px 10px",
    color: "white",
    marginBottom: 2,
  },
};

export default AdminMenu;
