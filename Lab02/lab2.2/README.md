# Lab 2.2 – Custom JSX Elements & Dynamic Props

# Objective

This lab focuses on:
Creating reusable custom components
Passing dynamic props
Using JSX expressions
Avoiding unnecessary wrapper elements with fragments

# Task 1 – Card Component

Created a reusable `Card` component that:
Accepts `title`, `children`, and optional `className`
Uses JSX expressions for dynamic values
Combines class names properly

Rendered multiple Card instances with different content.

# Task 2 – ProductList with Mapping

Defined an array of products:

js
const products = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Starter Pack", price: 14.5 },
  { id: 3, name: "Pro Bundle", price: 29.9 },
  { id: 4, name: "Mini Add-on", price: 4.75 }
];