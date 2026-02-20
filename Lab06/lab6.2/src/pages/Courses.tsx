import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../data";

export default function Courses() {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortOrder = searchParams.get("sort") ?? "asc";

    const sorted = [...courses].sort((a, b) => 
        sortOrder === "desc"
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title)
    );

    const toggleSort = () => {
        setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" ,});
    };

    return (
        <div>
            <h2>Courses</h2>

            <button onClick={toggleSort} style={{ marginBottom: 12 }}>
                Sort {sortOrder.toUpperCase()}
            </button>

            <ul>
                {sorted.map((c) => (
                    <li key={c.id}>
                        <Link to={`/courses/${c.id}`}>{c.title}</Link>
                    </li>
                ))}
            </ul>

            <p style={{ marginTop: 12, opacity: 0.8 }}>
                Click on a course title to see more details.
            </p>
        </div>
    );
}