import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import "./Cart.css";
import Breaks from "./CartComps/Breaks";
import Edetail from "./CartComps/Edetail";
import UserInfo from "./CartComps/UserInfo";

import ButtonSecondary from "../Buttons/ButtonSecondary";

const Cart = (props) => {
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
    <div className="cart">
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
      <ButtonSecondary></ButtonSecondary>
    </div>
  );
};

export default Cart;
