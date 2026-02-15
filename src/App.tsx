import { useState } from "react";
import Auth from "./components/Auth";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <Auth/>
      <div style={{ backgroundColor: color, height: 200, width: "100%" }}></div>
      <br />
      <button
        onClick={() => setColor("red")}
        className={color === "red" ? "selectedButton" : ""}
      >
        Red
      </button>
      <button
        onClick={() => setColor("green")}
        className={color === "green" ? "selectedButton" : ""}
      >
        Green
      </button>
      <button
        onClick={() => setColor("blue")}
        className={color === "blue" ? "selectedButton" : ""}
      >
        Blue
      </button>
    </>
  );
}

export default App;
