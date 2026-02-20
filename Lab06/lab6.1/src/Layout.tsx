import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="appShell">
      <header className="topBar">
        <div className="brand">
          <span className="brandDot" />
          <div>
            <div className="brandTitle">Student Portal</div>
            <div className="brandSub">Lab 6.1 • React Router</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
          >
            Courses
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
          >
            About
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">Student Portal © 2026</footer>
    </div>
  );
}