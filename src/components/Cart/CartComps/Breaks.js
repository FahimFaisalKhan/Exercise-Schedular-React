import React from "react";

const Breaks = (props) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3  rounded"
      style={{ backgroundColor: "#dfe8eb" }}
    >
      <p
        onClick={() => props.btHandler(10)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect"
      >
        <span>10</span>s
      </p>
      <p
        onClick={() => props.btHandler(20)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect"
      >
        <span>20</span>s
      </p>
      <p
        onClick={() => props.btHandler(30)}
        className="mb-0 fw-semibold rounded-circle p-2 hover-effect"
      >
        <span>30</span>s
      </p>
      <p
        onClick={() => props.btHandler(40)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect"
      >
        <span>40</span>s
      </p>
      <p
        onClick={() => props.btHandler(50)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect"
      >
        <span>50</span>s
      </p>
    </div>
  );
};

export default Breaks;
