import { useState } from 'react'
import './App.css'

function App() {
  let cash;
  let expenses = [];

  const addExpense = () => {
    let category = document.getElementById("category").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;

    expenses.push({category, amount, date});

    let total = expenses.reduce((sum, item) => { return item.amount + sum}, 0);

    cash = (3000 - total )

    console.log(expenses);
    console.log(total);

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
      <div className="expenses">
        
      </div>
    </div>
  );
}

export default App
