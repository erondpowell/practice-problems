import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';


function Expenses(props) {
  // const expenses = {props};
  // console.log("logging from within expenses component");
  // console.log(expenses);

  const allExpenses = props.expenses.map((expense) =>
    <ExpenseItem
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  );
  return (<Card className="expenses">{allExpenses}</Card>);
}

export default Expenses;


  // for (let expense of props.expenses) {
  //   // console.log(expense)
  //   allExpenses += (
  //     <ExpenseItem
  //       title={expense.title}
  //       date={expense.date}
  //       amount={expense.amount}
  //     />
  //   );
  // }

  // const generateExpenses = () => {
  //   for (let expense of props.expenses) {
  //     // console.log(expense)
  //     allExpenses += (
  //     <ExpenseItem
  //       title={expense.title}
  //       date={expense.date}
  //       amount={expense.amount}
  //     />
  //     );
  //   }
  //   return allExpenses;
  // }

  // console.log("logging all expenses");
  // console.log(allExpenses);
  // console.log(props.expenses)


  // return null;
