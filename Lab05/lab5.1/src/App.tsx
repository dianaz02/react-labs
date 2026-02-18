import React from "react";
import UserCard from "./components/UserCard";
import SkillList from "./components/SkillList";
import { User, Skill } from "./types";

function App() {
  const user: User = {
    name: "Diana",
    email: "dianazakariya123@gmail.com",
    age: 18,
  };

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "CSS", level: "Beginner" },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <UserCard user={user} isActive={true}>
        <p style={{ color: "#555" }}>Status: Frontend Developer</p>
      </UserCard>

      <h3>Skills</h3>
      <SkillList skills={skills} />
    </div>
  );
}

export default App;