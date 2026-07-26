import { useState } from 'react'
import './App.css'

function App() {
  const [cash, setCash] = useState(3000);
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    let category = document.getElementById("category").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;
    if(category == "") return alert("Category cannot be empty");
    if(amount <= 0 ) return document.getElementById('amount-error').innerHTML = "Enter Money"//alert("Amount cannot be empty");
    if(date == "") return alert("Date cannot be empty");

    const newExpense = { category, amount, date};

    setExpenses((prev) => [...prev, newExpense]);

    let total = expenses.reduce((sum, item) => { return item.amount + sum}, 0);

    setCash(cash => cash -total);

    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
  }

  return (
    <div className="main-1">
      <h1>Monthly Expense Tracker</h1>
      <h2>Cash: ${cash.toLocaleString()}</h2>
      <div className="form">
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" required>
          <option value="" defaultValue>
            📂 Select a category
          </option>
          <option value="housing">🏠 Housing</option>
          <option value="food">🛒 Food</option>
          <option value="transport">🚗 Transport</option>
          <option value="utilities">💡 Utilities</option>
          <option value="healthcare">🏥 Healthcare</option>
          <option value="shopping">🛍️ Shopping</option>
          <option value="entertainment">🎬 Entertainment</option>
          <option value="savings">💰 Savings</option>
          <option value="bills_subscriptions">
            📱 Bills &amp; Subscriptions
          </option>
          <option value="miscellaneous">📦 Miscellaneous</option>
          <option value="income">💵 Income</option>
        </select>
        <label htmlFor="number" className="amount">
          Amount:{" "} < div id='amount-error'></div>
        </label>
        <input type="number" className="number" id="amount" />
        <label
          htmlFor="date"
          className="date"
          max={new Date().toISOString().split("T")[0]}
          //min = {"2026-07-01"}
          min = "2026-07-01"
        >
          Date:
        </label>
        <input type="date" className="date" id="date" />
        <button className="submit" onClick={addExpense}>
          Add Expense
        </button>
      </div>
      <div className="expenses">
        <h1>ITEMS:</h1>

        {expenses.length === 0 ? (
          <p>No expenses recorded.</p>
        ) : (
          <ul>
            {expenses.map((expense, eid) => (
              <li key={eid}>
                <strong>Category:</strong> {expense.category || "Misc"} <br />
                <strong>Amount Used:</strong> {expense.amount || 3.5} <br />
                <strong>Date of Purchase:</strong>{" "}
                {expense.date
                  ? new Date(expense.date).toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App
