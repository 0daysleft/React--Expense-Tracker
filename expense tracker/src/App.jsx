import { useState } from "react";
import "./App.css";

function App() {
  const [cash, setCash] = useState(3000);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState(() => {
    const stored = sessionStorage.getItem("storedExpenses");
    return stored ? JSON.parse(stored) : [];
  });

  const addExpense = (e) => {
    e.preventDefault();
    if (category == "") return alert("Category cannot be empty");
    if (amount <= 0) return alert("Amount cannot be empty");
    if (date == "") return alert("Date cannot be empty");

    const newExpense = { category, amount, date };
    
    setExpenses((prev) => {
      const updated = [...prev, newExpense];

      sessionStorage.setItem("storedExpenses", JSON.stringify(updated));
      
      const total = updated.reduce((sum, item) => sum + item.amount, 0);
      
      setCash(3000 - total);
    
      return updated;
    });

    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
  };

  return (
    <div className="main-1">
      <h1>Monthly Expense Tracker</h1>
      <h2>Cash: ${cash.toLocaleString()}</h2>

      <form className="form">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled> 📂 Select a category</option>
          <option value="Housing">🏠 Housing</option>
          <option value="Food">🛒 Food</option>
          <option value="Transport">🚗 Transport</option>
          <option value="Utilities">💡 Utilities</option>
          <option value="Healthcare">🏥 Healthcare</option>
          <option value="Shopping">🛍️ Shopping</option>
          <option value="Entertainment">🎬 Entertainment</option>
          <option value="Savings">💰 Savings</option>
          <option value="Bills & Subscriptions">📱 Bills &amp; Subscriptions </option>
          <option value="Miscellaneous">📦 Miscellaneous</option>
          <option value="Income">💵 Income</option>
        </select>
        <label htmlFor="number" className="amount">
          {" "}
          Amount:{" "}
        </label>
        <input
          type="number"
          className="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="date" className="date">
          Date:
        </label>
        <input
          type="date"
          className="date"
          id="date"
          max={new Date().toISOString().split("T")[0]}
          min={"2026-07-01"}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="submit" onClick={addExpense}>
          Add Expense
        </button>
      </form>

      <div className="expenses">
        <h1>ITEMS:</h1>

        {expenses.length == 0 ? (
          <p>No expenses recorded.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, eid) => (
                <tr key={eid}>
                  <td> {expense.category || "Misc"} </td>
                  <td> $.{expense.amount || 3.5} </td>

                  <td>
                    {expense.date
                      ? new Date(expense.date).toLocaleDateString()
                      : new Date().toLocaleDateString()}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
