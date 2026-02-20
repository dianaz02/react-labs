import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="card">
      <h1 className="h1">Welcome</h1>
      <p className="text">
        This is a simple multi-page React app using <b>react-router-dom v6</b>.
        Navigate using links (no page reload).
      </p>

      <div className="btnRow">
        <Link className="btn" to="/courses">Go to Courses</Link>
        <Link className="btn secondary" to="/about">About the Program</Link>
      </div>

      <div className="hint">
        Tip: try opening <code>/xyz</code> to see the 404 page.
      </div>
    </section>
  );
}