import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Question = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How Does React Work?</Accordion.Header>
        <Accordion.Body>
          React uses two virtual DOMs to render the user interface. One of them
          is used to store the current state of the objects and the other to
          store the previous state of the objects. Whenever the virtual DOM gets
          updated, react compares the two virtual DOMs and gets to know about
          which virtual DOM objects were updated.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What is the difference between props and componenet?
        </Accordion.Header>
        <Accordion.Body>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          What is the use of useEffect except fetching data from api?
        </Accordion.Header>
        <Accordion.Body>
          By using this Hook, we tell React that our component needs to do
          something after render. React will remember the function we passed ,
          and call it later after performing the DOM updates. There are other
          uses of useEffect other than only fetching data from api, like dealing
          with timers and directly updating the browser dom.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Question;
