# Lab 6.2 — Route Parameters & Dynamic Pages (React Router v6)

## Objective
Extend Student Portal to support:
- Dynamic route parameters: /courses/:id
- Query parameters for sorting: /courses?sort=asc|desc

## Features Implemented
### 1) Dynamic Route /courses/:id
- Added route: courses/:id
- Implemented a loader that finds the course by id (`getCourseById`)
- If course does not exist → throws error → errorElement renders "Course not found"

### 2) Courses List with Links
- Courses.tsx renders all courses as <Link>:
  - Example: /courses/1, /courses/2, etc.
- Navigation is client-side (no full page reload) because we use <Link> from react-router-dom

### 3) Query Params Sorting (`useSearchParams`)
- Sorting is controlled via URL query:
  - /courses?sort=asc (A → Z)
  - /courses?sort=desc (Z → A)
- Button toggles sorting by updating search params:
  - setSearchParams({ sort: "asc" | "desc" })

## Difference: useParams vs useSearchParams
- useParams() reads route params from path:
  - /courses/:id → id
- useSearchParams() reads query params from URL:
  - /courses?sort=desc → sort

## How to Run
```bash
npm install
npm run dev