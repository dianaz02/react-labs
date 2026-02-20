import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <section className="card">
      <h1 className="h1">404 — Page Not Found</h1>
      <p className="text">
        No match for: <code>{location.pathname}</code>
      </p>
      <Link className="btn" to="/">Back to Home</Link>
    </section>
  );
}