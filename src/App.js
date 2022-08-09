import { useState } from "react"
import Header from "./components/Header"
import Income from "./components/Income"
import Expense from "./components/Expense"
import Sum from "./components/Sum"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [income, setIncome] = useState('')
  const [expense, setExpense] = useState('')
  return (
    <>
      <Header />
      <Income income={income} setIncome={setIncome} />
      <Expense expense = {expense} setExpense={setExpense}/>
      <Sum expense = {expense} income = {income}/>
      <Footer />
    </>
  )
}

export default App
