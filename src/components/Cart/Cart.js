import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./Cart.css";
import Breaks from "./CartComps/Breaks";
import Edetail from "./CartComps/Edetail";
import UserInfo from "./CartComps/UserInfo";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";

const Cart = (props) => {
  const popover = (
    <Popover id="popover">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  const [breakTime, setBreakTime] = useState(0);
  const handleBreakTime = (t) => {
    setBreakTime(t);
    localStorage.setItem("breakTime", t);
  };

  useEffect(() => {
    const lcBt = localStorage.getItem("breakTime");
    if (lcBt) {
      setBreakTime(parseInt(lcBt));
    }
  }, []);
  return (
    <div>
      <div className="d-flex">
        <Image
          style={{ width: "3.2rem", height: "3.5rem" }}
          roundedCircle
          fluid
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFlEKjQHLInSZGzlfwIAnCrqCOF3chDGhR6ZKfSw&s"
        ></Image>

        <div className="ms-3">
          <h5>Fahim faisal</h5>
          <h6 className="text-muted">@Fahim.Bangladesh</h6>
        </div>
      </div>
      <UserInfo></UserInfo>
      <h2 className="fs-5 mt-5 mb-2">Add a break</h2>
      <Breaks btHandler={handleBreakTime}></Breaks>
      <h2 className="fs-5 mt-5 mb-2">Exercise details</h2>
      <Edetail time={props.time} breakTime={breakTime}></Edetail>
      <div className="mt-5 d-grid gap-2">
        <OverlayTrigger
          trigger="click"
          overlay={popover}
          placement="auto"
          positionLeft={200}
          positionTop={50}
        >
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default Cart;
