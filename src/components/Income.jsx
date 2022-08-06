import { useState } from "react"


export default function Income() {
    const [income, setIncome] = useState(0)
  return (
    <>
      <input type="number" id="income"></input>
      <button>Submit</button>
    </>
  )
}
