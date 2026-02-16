import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="card">
      <h1>Lab 1.2 — Counter</h1>
      <p className="subtitle">
        Counter using <b>useState</b>. Click button
      </p>
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="btn" onClick={() => setCount(count + 1)}>+ Increment</button>
        <button className="btn btnGray" onClick={() => setCount(count - 1)}>- Decrement</button>
      </div>

      <div className="hint">
        Tip: try going negative - it still works because state updates normally.
      </div>
    </div>
 </div>
  );
}

export default App;