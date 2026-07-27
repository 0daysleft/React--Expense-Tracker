import { useState } from "react";
import "./App.css";

function App() {
  const [cash, setCash] = useState(3000);
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    let category = document.getElementById("category").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;
    if (category == "") return alert("Category cannot be empty");
    if (amount <= 0) return alert("Amount cannot be empty");
    if (date == "") return alert("Date cannot be empty");

    const newExpense = { category, amount, date };

    setExpenses((prev) => [...prev, newExpense]);

    let total = expenses.reduce((sum, item) => {
      return item.amount + sum;
    }, 0);

    setCash((cash) => cash - total);

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
        <select id="category" name="category" required>
          <option value="" defaultValue selected disabled> 📂 Select a category </option>
          <option value="Housing">🏠 Housing</option>
          <option value="Food">🛒 Food</option>
          <option value="Transport">🚗 Transport</option>
          <option value="Utilities">💡 Utilities</option>
          <option value="Healthcare">🏥 Healthcare</option>
          <option value="Shopping">🛍️ Shopping</option>
          <option value="Entertainment">🎬 Entertainment</option>
          <option value="Savings">💰 Savings</option>
          <option value="Bills & Subscriptions">
            📱 Bills &amp; Subscriptions
          </option>
          <option value="Miscellaneous">📦 Miscellaneous</option>
          <option value="Income">💵 Income</option>
        </select>
        <label htmlFor="number" className="amount">
          {" "}
          Amount:{" "}
        </label>
        <input type="number" className="number" id="amount" />
        <label htmlFor="date" className="date">
          Date:
        </label>
        <input
          type="date"
          className="date"
          id="date"
          max={new Date().toISOString().split("T")[0]}
          min={"2026-07-01"}
        />
        <button className="submit" onClick={addExpense}>
          Add Expense
        </button>
      </form>

      <div className="expenses">
        <h1>ITEMS:</h1>

        {expenses.length === 0 ? (
          <p>No expenses recorded.</p>
        ) : (
          <table>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>

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
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
