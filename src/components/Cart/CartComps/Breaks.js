import React from "react";

const Breaks = ({ btHandler }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-1 py-3  rounded"
      style={{ backgroundColor: "#dfe8eb" }}
    >
      <p
        onClick={() => btHandler(10)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect me-1 me-xxl-3 "
      >
        <span>10</span>s
      </p>
      <p
        onClick={() => btHandler(20)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect me-1 me-xxl-3 "
      >
        <span>20</span>s
      </p>
      <p
        onClick={() => btHandler(30)}
        className="mb-0 fw-semibold rounded-circle p-2 hover-effect me-1 me-xxl-3 "
      >
        <span>30</span>s
      </p>
      <p
        onClick={() => btHandler(40)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect me-1 me-xxl-3"
      >
        <span>40</span>s
      </p>
      <p
        onClick={() => btHandler(50)}
        className="mb-0 fw-semibold  rounded-circle p-2 hover-effect "
      >
        <span>50</span>s
      </p>
    </div>
  );
};

export default Breaks;
