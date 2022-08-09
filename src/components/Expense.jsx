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
    <form>
      <p>Please enter your monthly Expenses</p>
      <input
        type="number"
        name="Expense"
        id="Expense"
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Submit</button>
      <p>Your expense is ${expenseMessage}</p>
    </form>
  )
}
