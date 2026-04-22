import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>Lab 7.1 - Home</h1>
      <p>React Router + Lazy Loading</p>

      <div className="nav">
        <Link to="/dashboard" className="btn">Dashboard</Link>
        <Link to="/profile" className="btn">Profile</Link>
        <Link to="/settings" className="btn">Settings</Link>
      </div>
    </div>
  );
}