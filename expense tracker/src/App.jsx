import { useState } from 'react'
import './App.css'

function App() {
  let cash = 3000
  let expenses = [];

  const addExpense = () => {
    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;

    expenses.push({category, amount, date});

    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    console.log(total)
    
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
  }

  return (
    <div className="main-1">
      <h1>Monthly Expense Tracker</h1>
      Cash: ${cash}
      <div className="form">
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" required>
          <option value="" selected disabled>
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
        <label htmlFor="number" className="amount">Amount: </label>
        <input type="number" className="number" id="amount" />
        <label htmlFor="date" className="date">Date:</label>
        <input type="date" className="date" id="date" />
         <button className="submit" onClick={addExpense} >Add Expense</button>
      </div>
    </div>
  );
}

export default App
