import Card from "./Card";

export default function ProductList() {
  const products = [
    { id: 1, name: "Widget", price: 9.99 },
    { id: 2, name: "Starter Pack", price: 14.5 },
    { id: 3, name: "Pro Toolkit", price: 27.0 },
    { id: 4, name: "Mini Add-on", price: 4.25 },
  ];

  const money = (value) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "KZT",
      maximumFractionDigits: 0,
    }).format(Math.round(value * 500)); 

  return (
    <ul className="productList">
      {products.map((p) => (
        <li key={p.id} className="productItem">
          <Card title={p.name} className="cardCompact">
            <div className="row">
              <span className="label">Цена:</span>
              <span className="value">{money(p.price)}</span>
            </div>

            <div className="row">
              <span className="label">ID:</span>
              <span className="value">{p.id}</span>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
