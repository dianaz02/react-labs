Lab 5.1 – Typed Components & Props Validation

Objective

This lab converts a React project from JavaScript to TypeScript.
The goal is to define interfaces and union types for props and use strict type checking.


Technologies
 • React 18
 • TypeScript
 • Vite


Project Structure

src/
 • components/
 • UserCard.tsx
 • SkillList.tsx
 • types.ts
 • App.tsx
 • main.tsx



Types

In types.ts:

User interface:
 • name: string
 • email: string
 • age: number

SkillLevel type:
 • “Beginner”
 • “Intermediate”
 • “Expert”

Skill interface:
 • id: number
 • name: string
 • level: SkillLevel


UserCard Component

Props:
 • user: User
 • isActive?: boolean
 • children?: React.ReactNode

Function:
 • Displays user name, email and age
 • Uses optional isActive prop
 • Renders children as additional content (for example: status section)

SkillList Component

Props:
 • skills: Skill[]

Function:
 • Displays list of skills
 • Uses union type SkillLevel
 • Shows skill name and level


How to Run
 1. Install dependencies:

npm install
 2. Start development server:

npm run dev

Open in browser:
http://localhost:5173


What This Lab Shows
 • Using TypeScript interfaces
 • Using union types
 • Typed component props
 • Optional props
 • Strict type checking
 • Compile-time error prevention