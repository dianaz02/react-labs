export default function Section({ title, children }) {
  return (
    <>
      <div className="sectionHeader">
        <h2 className="sectionTitle">{title}</h2>
        <p className="sectionHint">Фрагмент + props + children</p>
      </div>

      {children}
    </>
  );
}
