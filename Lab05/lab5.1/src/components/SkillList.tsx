import React from "react";
import { Skill } from "../types";

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <ul style={{ paddingLeft: "20px" }}>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} — {skill.level}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;