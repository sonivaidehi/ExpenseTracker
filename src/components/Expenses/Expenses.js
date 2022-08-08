import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  // let [expenses, setExpenses] = useState(props.expenses);
  const onExpenseYearChangeHandler = (pSelectedYear) => {
    // console.log(selectedYear);
    // setExpenses(props.expenses)
    setSelectedYear(pSelectedYear);
    // setExpenses(props.expenses.filter(expense=> { return expense.date.getFullYear().toString() === pSelectedYear}));
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );


  return (
    <Card classes="expenses">
      <ExpensesFilter
        onExpenseYearChange={onExpenseYearChangeHandler}
        selectedYear={selectedYear}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
