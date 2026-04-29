import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // Fetch data
  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expenses");
    setExpenses(res.data);
  };

  // Add expense
  const addExpense = async () => {
    if (!title || !amount) return;

    await axios.post("http://localhost:5000/api/expenses", {
      title,
      amount: Number(amount),
      category: "General",
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  // Delete expense
  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce((acc, e) => acc + e.amount, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>💰 Expense Tracker</h1>

      <h2>Total: ₹{total}</h2>

      {/* Input */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>

      {/* List */}
      <ul>
        {expenses.map((e) => (
          <li key={e._id}>
            {e.title} - ₹{e.amount}
            <button onClick={() => deleteExpense(e._id)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;