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
    <form>
      <p>Please enter your monthly Income</p>
      <input
        type="number"
        name="Income"
        id="Income"
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Submit</button>
      <p>Your income is ${IncomeMessage}</p>
    </form>
  )
}
