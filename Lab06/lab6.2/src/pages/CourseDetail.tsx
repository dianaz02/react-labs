import { useLoaderData, useParams, Link } from "react-router-dom";
import type { Course } from "../types";

type LoaderResult = {
    course: Course;
};

export default function CourseDetail() {
    const { id } = useParams();
    const { course } = useLoaderData() as LoaderResult;

    return (
        <div>
            <h2>{course.title}</h2>
            <p>
                <b>Instructor:</b> {course.instructor}
            </p>
            <p>{course.description}</p>

            <p style={{ marginTop: 12, opacity: 0.8 }}>
            </p>

            <Link to="/courses">Back to Courses</Link>
        </div>
    );
}