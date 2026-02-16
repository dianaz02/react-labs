import "./App.css";
import Section from "./components/Section";
import ProductList from "./components/ProductList";
import Card from "./components/Card";

export default function App() {
  const studentName = "Diana"; 

  return (
    <div className="page">
      <div className="bgGlow" />

      <header className="top">
        <div>
          <h1 className="title">Lab 2.2 — Custom JSX + Dynamic Props</h1>
          <p className="subtitle">
            Я собираю UI из компонентов: <b>Card</b>, <b>ProductList</b>, <b>Section</b> и передаю данные через props.
          </p>
        </div>

        <div className="badge">
          <span className="dot" />
          React + Vite • {studentName}
        </div>
      </header>

      <main className="grid">
        <section className="panel">
          <Section title="Task 1 — Reusable Card">
            <div className="cardsRow">
              <Card title="Что такое Card?">
                <p className="text">
                  Это переиспользуемый компонент, который принимает <b>title</b> и <b>children</b>. Так удобнее собирать
                  интерфейс и не копировать разметку.
                </p>
                <p className="muted">+ className можно добавлять опционально (я сделал это в Card.jsx)</p>
              </Card>

              <Card title="Почему это удобно? " className="cardAccent">
                <ul className="list">
                  <li>Разметка в одном месте</li>
                  <li>Стили единые</li>
                  <li>Меняю Card — обновляется всё</li>
                </ul>
              </Card>
            </div>
          </Section>
        </section>

        <section className="panel">
          <Section title="Task 2 — ProductList with Mapping">
            <p className="text">
              Тут я использую <code>.map()</code> и <code>key</code> для каждого элемента списка. Данные подставляю через{" "}
              <code>{"{ }"}</code> (JSX expressions).
            </p>
            <ProductList />
          </Section>
        </section>

        <section className="panel">
          <Section title="Task 3 — Fragment-Based Section">
            <Card title="Как это работает?">
              <p className="text">
                Компонент <b>Section</b> возвращает <b>fragment</b>: заголовок + подсказку и потом <b>children</b>.
              </p>
              <p className="muted">
                структура чистая, страница собирается как конструктор.
              </p>
            </Card>
          </Section>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 • Lab02 / lab2.2</span>
        <span className="muted">Rendering with JSX</span>
      </footer>
    </div>
  );
}
