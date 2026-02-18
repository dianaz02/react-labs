import React from "react";
import { User } from "../types";

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children?: React.ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  isActive = true,
  children,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        marginBottom: "25px",
        backgroundColor: "#f9f9f9",
        opacity: isActive ? 1 : 0.5,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>

      <div style={{ marginTop: "10px" }}>
        {children}
      </div>
    </div>
  );
};

export default UserCard;