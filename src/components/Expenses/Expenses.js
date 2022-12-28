import { useState } from "react";

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilter] = useState('2020');

  const changeFilterHandler = (year) => {
    setFilter(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
