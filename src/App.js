import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");
  const increaseTemp = () => {
    if (temp === 30) return;

    let newTemp = temp + 1;
    if (newTemp > 25) {
      setTempColor("hot");
    } else if ((newTemp > 15) & (newTemp < 26)) {
      setTempColor("moderate");
    }
    setTemp(newTemp);
  };
  const decreaseTemp = () => {
    if (temp === 0) return;
    let newTemp = temp - 1;
    if (newTemp < 15) {
      setTempColor("cold");
    } else if ((newTemp > 15) & (newTemp < 26)) {
      setTempColor("moderate");
    }
    setTemp(newTemp);
  };
  return (
    <div>
      <h2>Welcome to Temperature Control System</h2>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
        </div>
        <div className="button-container">
          <button onClick={increaseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
