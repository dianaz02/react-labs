import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>HOME</h1>
      <Link to="/dashboard">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>DASHBOARD</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);