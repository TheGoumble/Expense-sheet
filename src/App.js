import { useState } from "react"
import Header from "./components/header"
import Income from "./components/income"
import Expense from "./components/expense"
import Sum from "./components/sum"
import Footer from "./components/footer"
import "./App.css"

function App() {
  const [income, setIncome] = useState("")
  const [expense, setExpense] = useState("")
  return (
    <>
      <Header />
      <Income income={income} setIncome={setIncome} />
      <Expense expense={expense} setExpense={setExpense} />
      <Sum expense={expense} income={income} />
      <Footer />
    </>
  )
}

export default App
