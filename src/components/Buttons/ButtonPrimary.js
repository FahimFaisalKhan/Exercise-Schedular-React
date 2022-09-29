import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonPrimary = (props) => {
  return (
    <div className={`d-grid gap-2 mt-${props.gap}`}>
      <Button
        onClick={() => props.handler(props.time)}
        variant="primary"
        size="md"
      >
        <FontAwesomeIcon className="me-1" icon={faPlus} /> Block level button
      </Button>
    </div>
  );
};

export default ButtonPrimary;
