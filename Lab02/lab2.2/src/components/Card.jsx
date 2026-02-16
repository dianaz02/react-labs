export default function Card({ title, children, className = "" }) {
  const classes = `card ${className}`.trim();

  return (
    <article className={classes}>
      <div className="cardHeader">
        <h3 className="cardTitle">{title}</h3>
      </div>

      <div className="cardBody">{children}</div>
    </article>
  );
}
