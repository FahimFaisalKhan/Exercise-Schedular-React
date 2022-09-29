import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Ecard from "../Card/Ecard";

const Cards = (props) => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <Row xs={1} md={2} lg={3} className="g-5">
      {activities.map((a) => {
        return <Ecard activity={a} handler={props.handler}></Ecard>;
      })}
    </Row>
  );
};

export default Cards;
