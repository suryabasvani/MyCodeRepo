import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, List } from "antd";

//import { AppContext } from "../../../AppContext";

const AllNursesList = (props) => {
  //const { state } = useContext(AppContext);
  //const nurseslist = state.Nurses;
  //console.log(state.Nurses);

  //const [Nurseslist, setNurseslist] = useState(state.Nurses);

  // useEffect(() => {
  //   setNurseslist(state.Nurses);
  // }, [setNurseslist, state.Nurses]);

  return (
    <div>
      {props.nurseslist.length > 0 ? (
        <List
          style={{
            width: "80%",
            margin: "0 auto",
            border: "1px solid #f0f0f0",
            padding: "20px",
          }}
          itemLayout="horizontal"
          dataSource={props.nurseslist}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={item.photo}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "solid 2px #009cfc",
                    }}
                  />
                }
                title={
                  <Link
                    to=""
                    style={{ color: "#009cfc", textTransform: "uppercase" }}
                  >
                    {item.username}
                  </Link>
                }
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      ) : (
        <p>NO nurses on the list</p>
      )}
    </div>
  );
};

export default AllNursesList;
