import { useState } from "react";
import "./App.css";

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h1>Lab 1.1 — Declarative (React)</h1>

        <button
          className="btn"
          onClick={() => setIsHighlighted(!isHighlighted)}
        >
          Toggle Highlight
        </button>

        <p className={isHighlighted ? "highlight" : ""}>
          text
        </p>
      </div>
    </div>
  );
}

export default App;