import { useState } from "react"
export const number = 1

export default function Income() {
    const [IncomeMessage,setIncomeMessage] = useState('')

    const [IncomeValue, setIncomeValue] = useState(0)
    const handleChange = (event) => {
       setIncomeValue(event.target.value)
       //console.log(event.target.value)
    }
    const handleClick = (event) => {
        event.preventDefault() 
        setIncomeMessage(IncomeValue)


    }
  return (<form>
  <p>Please enter your monthly Income</p>
  <input type="number" name="Income" id="Income" onChange={handleChange}></input>
  <button onClick={handleClick}>Submit</button>
  <p>Your income is ${IncomeMessage}</p>
  </form>  
  )
}
