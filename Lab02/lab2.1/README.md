# Lab 2.1 – Fragment Drill & List Mapping

# Objective

In this lab we practiced:
- Using React Fragments instead of extra div wrappers
- Mapping arrays to JSX elements using .map()
- Rendering dynamic content with JSX expressions


# Task 1 – Fragment Layout

Created a component that returns exactly three sibling elements:
<header>
<main>
<footer>

Wrapped them using React Fragment (<> </>) without extra divs.

Verified in DevTools that there are no unnecessary wrapper elements.

# Task 2 – Mapping Array to List

Defined an array of items:

```js
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Mango" }
];