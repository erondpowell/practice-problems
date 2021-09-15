import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./Expenses/ExpensesFilter";
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

  const allExpenses = filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={expenseFilterYear}
        />
        {allExpenses}
      </Card>
    </div>
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
