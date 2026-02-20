type Course = {
  id: number;
  title: string;
  teacher: string;
  credits: number;
};

const COURSES: Course[] = [
  { id: 1, title: "Web Development Basics", teacher: "A. Teacher", credits: 5 },
  { id: 2, title: "React Fundamentals", teacher: "B. Teacher", credits: 5 },
  { id: 3, title: "Databases Intro", teacher: "C. Teacher", credits: 4 },
  { id: 4, title: "UX for Apps", teacher: "D. Teacher", credits: 3 },
];

export default function Courses() {
  return (
    <section className="card">
      <h1 className="h1">Courses</h1>
      <p className="text">Hardcoded list (allowed by requirements).</p>

      <div className="grid">
        {COURSES.map((c) => (
          <div className="miniCard" key={c.id}>
            <div className="miniTitle">{c.title}</div>
            <div className="miniText">Teacher: {c.teacher}</div>
            <div className="tag">{c.credits} credits</div>
          </div>
        ))}
      </div>
    </section>
  );
}