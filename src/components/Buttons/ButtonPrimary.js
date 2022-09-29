import React from "react";
import Button from "react-bootstrap/Button";

const ButtonPrimary = (props) => {
  return (
    <div className={`d-grid gap-2 mt-${props.gap}`}>
      <Button
        onClick={() => props.handler(props.time)}
        variant="primary"
        size="md"
      >
        Block level button
      </Button>
    </div>
  );
};

export default ButtonPrimary;
