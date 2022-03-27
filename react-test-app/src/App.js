import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <button
          onClick={handleDecrease}
          disabled={disabled}
          data-testid="minus-button"
        >
          -
        </button>
        <button
          onClick={handleIncrease}
          disabled={disabled}
          data-testid="plus-button"
        >
          +
        </button>
        <button
          onClick={() => setDisabled(!disabled)}
          style={{ backgroundColor: "blue" }}
          data-testid="on/off"
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
