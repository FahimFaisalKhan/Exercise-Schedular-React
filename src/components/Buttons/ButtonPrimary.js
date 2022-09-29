import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonPrimary = ({ handler, time }) => {
  return (
    <div className="d-grid  gap-2  ">
      <Button onClick={() => handler(time)} variant="primary" size="md">
        <FontAwesomeIcon className="me-1" icon={faPlus} /> Block level button
      </Button>
    </div>
  );
};

export default ButtonPrimary;
