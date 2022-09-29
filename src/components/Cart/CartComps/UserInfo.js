import React from "react";

const UserInfo = () => {
  return (
    <div className="container d-flex justify-content-between align-items-center profile-info mt-5 px-4 py-3 rounded ">
      <div className="text-center  me-1 me-xxl-4">
        <h3 className="fw-bold fs-5 mb-1">
          75 <span className="unit">kg</span>
        </h3>
        <p className="fw-semibold text-muted mb-0">Weight</p>
      </div>
      <div className="text-center me-1 me-xxl-4">
        <h3 className="fw-bold fs-5 mb-1">65</h3>
        <p className="fw-semibold text-muted mb-0">Height</p>
      </div>
      <div className="text-center">
        <h3 className="fw-bold fs-5 mb-1">
          25 <span className="unit">yrs</span>
        </h3>
        <p className="fw-semibold text-muted mb-0">Age</p>
      </div>
    </div>
  );
};

export default UserInfo;
