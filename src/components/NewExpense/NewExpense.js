import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [expenseFormVisible, setExpenseFormVisible] = useState(false);

  const formVisibleHandler = () => {
    setExpenseFormVisible(true);
  };

  const formCloseHandler = ()=>{
    setExpenseFormVisible(false)
  }
  let formContent = (
    <button type="submit" onClick={formVisibleHandler}>
      Add Expense
    </button>
  );
  if (expenseFormVisible) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={formCloseHandler}
      />
    );
  }
  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
