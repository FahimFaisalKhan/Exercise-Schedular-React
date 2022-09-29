import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
const ButtonSecondary = () => {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  return (
    <div>
      <div className="mt-5 d-grid gap-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
      </div>
      <Toast show={showA} onClose={toggleShowA} className="toast bg-success">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Hey Fahim</strong>
          <small>Congratulations!</small>
        </Toast.Header>
        <Toast.Body className="fw-semibold text-white">
          You have successfully selected your exercices.
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ButtonSecondary;
