import { useMemo, useState } from "react";

export default function StepCounter({ title, initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);
  const [operationCount, setOperationCount] = useState(0);

  const lastFive = useMemo(() => {
    const slice = history.slice(-5);
    return slice;
  }, [history]);

  const addToHistory = (next) => {
    setHistory((prev) => [...prev, next]);
  };

  const increment = () => {
    setCount((prev) => {
      const next = prev + step;
      addToHistory(next);
      return next;
    });
    setOperationCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => {
      const next = prev - step;
      addToHistory(next);
      return next;
    });
    setOperationCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };

  const valueBadgeClass =
    count > initialValue ? "badge good" : count < initialValue ? "badge bad" : "badge neutral";

  return (
    <section className="counterCard">
      <div className="cardTop">
        <div>
          <h3>{title}</h3>
          <p className="muted">
            initialValue: <b>{initialValue}</b> · step: <b>{step}</b>
          </p>
        </div>
        <span className={valueBadgeClass}>{count}</span>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="muted">Current</span>
          <b>{count}</b>
        </div>
        <div className="stat">
          <span className="muted">Operations</span>
          <b>{operationCount}</b>
        </div>
        <div className="stat">
          <span className="muted">History length</span>
          <b>{history.length}</b>
        </div>
      </div>

      <div className="buttons">
        <button onClick={increment}>Increment (+{step})</button>
        <button onClick={decrement} className="outline">
          Decrement (-{step})
        </button>
        <button onClick={reset} className="danger">
          Reset
        </button>
      </div>

      <div className="history">
        <h4>Last values</h4>
        <ul>
          {lastFive.map((v, idx) => (
            <li key={`${v}-${idx}`}>{v}</li>
          ))}
        </ul>

        <p className="muted tiny">
          Показываю последние 5 значений (если меньше — то все).
        </p>
      </div>
    </section>
  );
}