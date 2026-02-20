import type { Course } from './types';

export const courses: Course[] = [
    {
        id: 1,
        title: "Introduction to React",
        instructor: "John Doe",
        description: "Learn the basics of React, including components, state, and props."
    },
    {
        id: 2,
        title: "Advanced React",
        instructor: "Jane Smith",
        description: "Dive deeper into React with hooks, context, and performance optimization."
    },
    {
        id: 3,
        title: "React Router",
        instructor: "Emily Johnson",
        description: "Master client-side routing in React applications using React Router."
    },
    {
        id: 4,
        title: "State Management with Redux",
        instructor: "Michael Brown",
        description: "Learn how to manage complex state in React applications using Redux."
    },
];

export function getCourseById(id: number): Course | undefined {
    return courses.find((c) => c.id === id);
}