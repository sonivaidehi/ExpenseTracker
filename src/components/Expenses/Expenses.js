import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('')
  const onExpenseYearChangeHandler = (pSelectedYear) => {
    // console.log(selectedYear);
    setSelectedYear(pSelectedYear)
  }
  return (
    <Card classes="expenses">
      <ExpensesFilter onExpenseYearChange={onExpenseYearChangeHandler} selectedYear={selectedYear}></ExpensesFilter>
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};

export default Expenses;
