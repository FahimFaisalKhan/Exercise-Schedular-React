import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Question from "./components/Questions/Question";
function App() {
  const [time, setTime] = useState(0);
  const handleTime = (t) => {
    console.log(t, time);
    setTime(time + t);
  };

  return (
    <div style={{ backgroundColor: "#dfe8eb" }}>
      {" "}
      <section className="d-flex flex-column flex-md-row">
        <div className="container my-5">
          <header className="fw-bold fs-1 text-primary">
            {" "}
            <FontAwesomeIcon className="me-1" icon={faDumbbell} /> Power Hour
          </header>
          <main className="cards-container my-5">
            <h1 className="fw-semibold fs-3 mb-4 text-secondary ">
              What Exercices do you prefer today?
            </h1>
            <Cards handler={handleTime}></Cards>
          </main>
        </div>
        <section className="cart-sec" style={{ width: "22rem" }}>
          <div className="cart-container">
            <Cart time={time}></Cart>
          </div>
        </section>
      </section>
      <section className="questions">
        <Question></Question>
      </section>
    </div>
  );
}

export default App;
