import { useState } from "react";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Pen',
    amount: 111.11,
    date: new Date(2020, 7, 14),
  },{ 
    id: '2', 
    title: 'Cucumber', 
    amount: 222.22, 
    date: new Date(2019, 5, 12) 
  },{
    id: '3',
    title: 'Car',
    amount: 333.33,
    date: new Date(2021, 2, 24),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses]
      });
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
