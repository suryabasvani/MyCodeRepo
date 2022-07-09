import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Button, Divider } from "antd";
import { AppContext } from "../../../AppContext";
const { Meta } = Card;

const Doctors = () => {
  const { state } = useContext(AppContext);
  let navigate = useNavigate();
  //console.log(state);

  useEffect(() => {
    setDoctorsList(state.doctors);
  }, [state.doctors]);

  const [doctorsList, setDoctorsList] = useState(state.doctors);
  //console.log(doctorsList);

  const codeItem = doctorsList.map((doctor) => {
    return (
      <Col span={6} key={doctor.id} style={{ ...styles.margin_bottom }}>
        <Link to={`details/${doctor.id}`}>
          <Card
            hoverable
            style={{
              borderColor: "#dcd9d9",
              borderRadius: "5px",
            }}
            cover={<img alt={doctor.name} src={doctor.imageUrl} />}
          >
            <Meta title={doctor.name} description={doctor.specialization} />
          </Card>
        </Link>
      </Col>
    );
  });

  const AddDoctorHandler = () => {
    //event.preventdefault(admin/doctors/add_doctor);
    navigate("/admin/doctors/add_doctor");
  };

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={20}>Doctor Search </Col>
        <Col span={4}>
          <Button
            style={{ color: "#0b84ce" }}
            onClick={() => {
              AddDoctorHandler();
            }}
          >
            Add A Doctor
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>{codeItem}</Row>
    </div>
  );
};

const styles = {
  custom_border: {
    border: "solid 1px #000",
    borderRadius: "10px",
  },
  margin_bottom: {
    marginBottom: "20px",
  },
};

export default Doctors;
