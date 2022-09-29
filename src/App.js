import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function App() {
  const [time, setTime] = useState(0);
  const handleTime = (t) => {
    console.log(t, time);
    setTime(time + t);
  };

  return (
    <section className="d-flex" style={{ backgroundColor: "#dfe8eb" }}>
      <div className="container my-5">
        <header className="fw-bold fs-2 text-primary">
          {" "}
          Ultra active club
        </header>
        <main className="cards-container my-5">
          <Cards handler={handleTime}></Cards>
        </main>
      </div>
      <div className="cart-container">
        <Cart time={time}></Cart>
      </div>
    </section>
  );
}

export default App;
