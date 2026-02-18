import "./App.css";
import UserProfileDemo from "./components/UserProfileDemo";

export default function App() {
  return (
    <div className="page">
      <div className="shell">
        <header className="top">
          <div>
            <h1>Lab 3.2 — Data Loading with useEffect</h1>
            <p className="muted">
              Fetch + loading/error + cleanup (AbortController) + dependency array
            </p>
          </div>
          <span className="badge">React 18 + Vite</span>
        </header>

        <UserProfileDemo />

        <footer className="footer">
          <span className="muted">© 2026 • Lab03 • useEffect практика</span>
        </footer>
      </div>
    </div>
  );
}