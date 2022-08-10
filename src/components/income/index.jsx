import { useState } from "react"
export default function Income({ income, setIncome }) {
  const [IncomeMessage, setIncomeMessage] = useState("")

  const handleChange = (event) => {
    setIncome(event.target.value)
    console.log(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setIncomeMessage(income)
  }
  return (
      <form id="income">
        <p>Please enter your monthly Income</p>
        <input
          type="number"
          name="Income"
          id="Income"
          placeholder="Type the income"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Submit</button>
        <p>Your income is ${IncomeMessage}</p>
      </form>
  )
}
