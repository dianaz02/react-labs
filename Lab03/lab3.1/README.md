# Lab 3.1 — Component with State (Advanced Counter)

# Objective
Create a React component that manages multiple pieces of state using useState, demonstrates props usage, and shows independent component instances.


# StepCounter Component

The StepCounter component:

- Accepts props:
  - initialValue (number, default: 0)
  - step (number, default: 1)
- Uses useState to manage:
  - count — current value
  - history — array of previous values
  - operationCount — number of operations performed
- Buttons:
  - Increment
  - Decrement
  - Reset
- Displays:
  - Current count
  - Total operations
  - Last 5 history values

# Multiple State Variables

Each counter maintains:
- Independent count
- Independent history
- Independent operationCount

State updates trigger re-render.

# Component Composition

A parent component CounterApp renders:

 Counter 1:
 initialValue = 0
 step = 1

Counter 2:
initialValue = 10
step = 5

Each counter works independently.


# Props vs State

Props: passed from parent (`initialValue`, `step`)
State: managed inside component (`count`, history, `operationCount`)
State changes cause re-render.


# Technical Requirements Met

React 18+
Functional components only
useState hook
No external UI libraries
Proper naming (camelCase)
Code runs without errors

# How to Run

```bash
npm install
npm run dev