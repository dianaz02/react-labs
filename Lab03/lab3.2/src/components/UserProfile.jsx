import { useEffect, useRef, useState } from "react";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const controllerRef = useRef(null);

  const fetchUser = async (id) => {
    if (controllerRef.current) controllerRef.current.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const res = await fetch(https://jsonplaceholder.typicode.com/users/${id},
{ signal: controller.signal }
      );

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

      const data = await res.json();
      setUser(data);
    } catch (e) {
      if (e.name !== "AbortError") setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(userId);

    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, [userId]);

  if (loading) {
    return (
      <div className="card">
        <div className="row">
          <div className="dot pulse" />
          <div>
            <h3 className="title">Loading…</h3>
            <p className="muted">Загружаю пользователя #{userId}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card error">
        <h3 className="title">Ошибка</h3>
        <p className="muted">Не удалось загрузить данные: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="card">
        <p className="muted">Пользователь не выбран.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="profileHead">
        <div className="avatar">{user.name?.slice(0, 1) ?? "U"}</div>
        <div>
          <h3 className="title">{user.name}</h3>
          <p className="muted">@{user.username} • ID: {userId}</p>
        </div>
      </div>

      <div className="grid">
        <div className="info">
          <span className="label">Email</span>
          <span className="value">{user.email}</span>
        </div>
        <div className="info">
          <span className="label">Phone</span>
          <span className="value">{user.phone}</span>
        </div>
        <div className="info">
          <span className="label">Website</span>
          <span className="value">{user.website}</span>
        </div>
        <div className="info">
          <span className="label">Company</span>
          <span className="value">{user.company?.name}</span>
        </div>
        <div className="info wide">
          <span className="label">Address</span>
          <span className="value">
            {user.address?.city}, {user.address?.street} {user.address?.suite}
          </span>
        </div>
      </div>
    </div>
  );
}