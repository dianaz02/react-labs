export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
}