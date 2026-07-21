import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="main-1">
      <h1>Monthly Expense Tracker</h1>
      Cash: $3000
      <div className="form">
        <input type="number" className="number" id='amount'/>
        <input type="date" className="date" id='date'/>
        <label for="category">Category:</label>
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
      </div>
    </div>
  );
}

export default App
