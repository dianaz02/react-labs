Lab 1.1 — Declarative vs Imperative

About

В этой лабораторной работе было реализовано одно и то же поведение двумя способами:
Imperative (с использованием jQuery)
Declarative (с использованием React)

Нужно было показать разницу между прямой работой с DOM и подходом через состояние (state) в React.
Task 1 — Imperative (jQuery)

Была создана простая HTML-страница, содержащая:
Кнопку (Toggle Highlight)
Параграф с текстом
Подключённый jQuery (через CDN)

При нажатии на кнопку с помощью jQuery добавляется или убирается CSS-класс .highlight у параграфа.

Использовалась функция:
.toggleClass()
.highlight {
  background: yellow;
}

Task 2 — Declarative (React)

Был создан React-проект с использованием Vite.

В компоненте используется:
useState для хранения состояния (isHighlighted)
className зависит от состояния
При клике обновляется состояние
React автоматически делает re-render
для активации:
В папке declarative выполнить:
npm install
npm run dev

Conclusion:

Imperative подход требует ручного управления DOM, что может усложнять поддержку кода при масштабировании.

Declarative подход (React) позволяет описывать интерфейс через состояние, что делает код более структурированным и удобным для расширения.