import CounterApp from "./components/CounterApp";

export default function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <h1>Lab 3.1 — Advanced Counter</h1>
        <p className="subtitle">
          useState + props: шаг приходит через props, внутри — count, history и operationCount.
        </p>
      </header>

      <CounterApp />
    </div>
  );
}