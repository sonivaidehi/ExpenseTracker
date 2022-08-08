import ExpenseItem from "../Expenses/ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  let expenseContent = <p>No expenses found.</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">{expenseContent}</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
