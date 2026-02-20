import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <NavLink to="/" style={{ marginRight: 10 }}>Home</NavLink>
        <NavLink to="/courses" style={{ marginRight: 10 }}>Courses</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Outlet />

      <footer style={{ marginTop: 30 }}>
        <hr />
        Student Portal © 2026
      </footer>
    </div>
  );
}