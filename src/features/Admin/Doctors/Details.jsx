import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { Col, Row, Card, Collapse } from "antd";
import { LeftCircleTwoTone } from "@ant-design/icons";
const { Panel } = Collapse;
const { Meta } = Card;

const Details = () => {
  let { docid } = useParams();
  let navigate = useNavigate();
  console.log(docid);
  const [selctedDoct, setSelectorDoct] = useState(1);
  const { state } = useContext(AppContext);
  //console.log(state.doctors);

  useEffect(() => {
    setSelectorDoct(state.doctors.find((doctor) => doctor.id === docid));
    console.log(selctedDoct);
  }, [selctedDoct, docid, state.doctors]);

  return (
    <>
      <Row>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: "100%",
              borderColor: "#cbcbcb",
              borderRadius: "10px",
            }}
            cover={<img alt={selctedDoct.name} src={selctedDoct.imageUrl} />}
          >
            <Meta
              title={selctedDoct.name}
              description={`${selctedDoct.time}`}
            />
          </Card>
        </Col>
        <Col span={17} offset={1}>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel header="Details" key="1">
              <Row>
                <Col span={5}>Qualification : </Col>
                <Col span={19}>{selctedDoct.qualification}</Col>
                <Col span={5}>Specialization :</Col>
                <Col span={19}>{selctedDoct.specialization}</Col>
              </Row>
            </Panel>
            <Panel header="Appointments" key="2">
              <p>No appointments</p>
            </Panel>
            <Panel header="Contact details" key="3">
              <Row>
                <Col span={5}>Phone : </Col>
                <Col span={19}>{selctedDoct.phone}</Col>
                <Col span={5}>Specialization :</Col>
                <Col span={19}>{selctedDoct.email}</Col>
              </Row>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <Row>
        <Col span={1} offset={23}>
          <br />
          <LeftCircleTwoTone
            style={{ fontSize: "30px" }}
            onClick={() => navigate(-1)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Details;
