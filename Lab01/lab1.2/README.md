Lab 1.2 — React Project Setup & Counter

About

В этой лабораторной работе был создан новый React-проект с использованием Vite.
Реализован минимальный компонент Counter, который демонстрирует работу состояния (useState) и автоматический re-render.

Tools Used
React 18+ Vite Node.js npm


Project Setup

Проект был создан с помощью команды:
npm create vite@latest lab1.2 -- --template react
cd lab1.2
npm install

Компонент Counter:
Отображает число (начальное значение 0)
Имеет кнопки Increment и Decrement
Использует useState для хранения состояния
Обновляет значение при нажатии кнопок
Работает без прямой манипуляции DO

Проверено на:
node -v
npm -v