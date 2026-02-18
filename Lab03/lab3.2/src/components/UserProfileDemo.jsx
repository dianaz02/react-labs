import { useMemo, useState } from "react";
import UserProfile from "./UserProfile";

export default function UserProfileDemo() {
  const [userId, setUserId] = useState(1);

  const quickButtons = useMemo(() => [1, 2, 3], []);

  const refreshRandom = () => {
    const randomId = Math.floor(Math.random() * 10) + 1; 
    setUserId(randomId);
  };

  return (
    <section className="section">
      <div className="sectionTop">
        <h2>Профиль пользователя</h2>
        <p className="muted">
          Кнопки меняют <b>userId</b>, из-за этого useEffect делает новый запрос.
        </p>
      </div>

      <div className="controls">
        {quickButtons.map((id) => (
          <button
            key={id}
            className={userId === id ? "btn active" : "btn"}
            onClick={() => setUserId(id)}
          >
            User {id}
          </button>
        ))}

        <button className="btn ghost" onClick={refreshRandom}>
          Refresh (random 1–10)
        </button>
      </div>

      <UserProfile userId={userId} />
    </section>
  );
}