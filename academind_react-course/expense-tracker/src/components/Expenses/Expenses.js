import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Card";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterYear = (yearSelected) => {
    setFilteredYear(yearSelected);
    console.log("logging from Expenses.js");
    console.log(yearSelected);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={expenseFilterYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
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
