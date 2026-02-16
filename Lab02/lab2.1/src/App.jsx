import "./App.css";

function FragmentLayout() {
  return (
    <>
      <header className="section">
        <h1>Lab 2.1 — Fragment Drill & List Mapping</h1>
        <p className="muted">
          Task 1: верстаем только через Fragment, без лишних div-обёрток внутри
          компонента.
        </p>
      </header>

      <main className="section">
        <p>
          В React компонент должен вернуть один “корневой” результат. 
          <b> Fragment </b>
          (<code>&lt;&gt;&lt;/&gt;</code>) группирует элементы без лишней
          разметки.
        </p>
      </main>

      <footer className="section footer">
        © 2026 • Lab02 • React (Fragments & JSX)
      </footer>
    </>
  );
}

function ItemList() {
  const items = [
    { id: 1, name: "Apple " },
    { id: 2, name: "Banana " },
    { id: 3, name: "Cherry " },
    { id: 4, name: "Mango " },
  ];

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="listItem">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

function CombinedFragmentList() {
  const items = [
    { id: 1, name: "Apple " },
    { id: 2, name: "Banana " },
    { id: 3, name: "Cherry " },
    { id: 4, name: "Mango " },
  ];

  return (
    <>
      <h2 className="title2">Task 3 — Combined Fragment + List</h2>

      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="listItem">
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <p className="summary">
        Total: <b>{items.length}</b> items
      </p>
    </>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="card">
        {/* Task 1 */}
        <FragmentLayout />

        <div className="divider" />

        {/* Task 2 */}
        <h2 className="title2">Task 2 — Mapping Array to List</h2>
        <p className="muted">
          Тут мы делаем <code>.map()</code> и обязательно даём <code>key</code>
          каждому <code>&lt;li&gt;</code>.
        </p>
        <ItemList />

        <div className="divider" />

        {/* Task 3 */}
        <CombinedFragmentList />
      </div>
    </div>
  );
}