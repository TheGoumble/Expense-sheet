import { useState } from "react"

export default function Expense({ expense, setExpense }) {
  const [expenseMessage, setExpenseMessage] = useState("")

  const handleChange = (event) => {
    setExpense(event.target.value)
    console.log(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setExpenseMessage(expense)
  }
  return (
    <form id = "expense">
      <p>Please enter your monthly Expenses</p>
      <input
        type="number"
        name="Expense"
        id="Expense"
        placeholder="Type the expense"
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Submit</button>
      <p>Your expenses are ${expenseMessage}</p>
    </form>
  )
}
