export default function About() {
  return (
    <section className="card">
      <h1 className="h1">About</h1>
      <p className="text">
        This portal demonstrates:
      </p>
      <ul className="list">
        <li>Route configuration with <b>createBrowserRouter</b></li>
        <li>Shared layout using <b>&lt;Outlet /&gt;</b></li>
        <li>Navigation using <b>Link/NavLink</b> (NOT &lt;a&gt; tags)</li>
        <li>404 page for unknown URLs</li>
      </ul>
      <p className="text muted">
        Everything is typed with TypeScript (.tsx).
      </p>
    </section>
  );
}