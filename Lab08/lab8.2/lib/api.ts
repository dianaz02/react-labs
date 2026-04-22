import { User, Notification } from "../types";

export async function getDashboardData() {
  // Имитация задержки сервера [cite: 242]
  await new Promise((res) => setTimeout(res, 100));

  const user: User = { 
    id: "user-123", 
    name: "Diana Zakariya", 
    email: "diana@example.com", 
    role: "admin" 
  };

  const notifications: Notification[] = [
    { id: "1", message: "New login from Chrome", read: false },
    { id: "2", message: "Lab 8.1 completed", read: true }
  ];

  const analytics = {
    pageViews: Math.floor(Math.random() * 10000), // Доказывает SSR [cite: 248]
    sessions: 850,
    bounceRate: 15.4
  };

  return { user, notifications, analytics };
}