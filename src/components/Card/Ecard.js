import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ButtonPrimary from "../Buttons/ButtonPrimary";
const Ecard = ({ activity, handler }) => {
  const { id, name, image, description, time } = activity;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fw-bold fs-4">{name}</Card.Title>
          <Card.Text className="text-muted fw-semibold">
            {description}
          </Card.Text>
          <Card.Text className="fw-semibold">Time Required: {time}s</Card.Text>
          <ButtonPrimary handler={handler} time={time}></ButtonPrimary>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Ecard;
