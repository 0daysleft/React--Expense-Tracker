import { useState } from 'react'
import './App.css'

function App() {
  const [cash, setCash] = useState(3000);
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    let category = document.getElementById("category").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;

    const newExpense = { category, amount, date};

    setExpenses((prev) => [...prev, newExpense]);

    console.log(expenses);
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
          Amount:{" "}
        </label>
        <input type="number" className="number" id="amount" />
        <label htmlFor="date" className="date">
          Date:
        </label>
        <input type="date" className="date" id="date" />
        <button className="submit" onClick={addExpense}>
          Add Expense
        </button>
      </div>
      <div className="expenses">
        <h1>ITEMS: </h1>
        <ul>
          {expenses.map((expense) => {
            return (
              <li key={expense.amount}>
                Category: {expense.category ?? "None"}, Amount Used: {expense.amount ?? 0},
                Date of Purchase: {expense.date ?? new Date().toLocaleDateString() }
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App
