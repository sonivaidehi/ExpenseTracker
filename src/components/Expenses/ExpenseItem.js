import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.expense.title)

  return (
    <li>
      <Card classes="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
