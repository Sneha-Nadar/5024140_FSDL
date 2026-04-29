import Card from "../components/Card";

export default function Dashboard() {
  const data = [
    { id: 1, name: "Food", amount: 500, icon: "🍔" },
    { id: 2, name: "Travel", amount: 1200, icon: "✈️" },
    { id: 3, name: "Shopping", amount: 2000, icon: "🛍️" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}