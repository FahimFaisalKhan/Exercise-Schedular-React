import React from "react";

const Edetail = (props) => {
  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center p-3  rounded"
        style={{ backgroundColor: "#dfe8eb" }}
      >
        <p className="mb-0 fw-semibold">Exercise Time</p>
        <p className="mb-0 fw-semibold text-muted">{props.time} seconds</p>
      </div>
      <div
        className="d-flex justify-content-between align-items-center p-3  rounded mt-3"
        style={{ backgroundColor: "#dfe8eb" }}
      >
        <p className="mb-0 fw-semibold">Break Time</p>
        <p className="mb-0 fw-semibold text-muted">
          <span>{props.breakTime}</span> seconds
        </p>
      </div>
    </div>
  );
};

export default Edetail;
