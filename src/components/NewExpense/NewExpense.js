import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEdeting] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseDataWithID = {
      ...expense,
      id: Math.floor(Math.random() * 1000)
    }
    props.addExpense(expenseDataWithID);
    setIsEdeting(false);
  };

  const startEditingHandler = () => {
    setIsEdeting(true);
  };
  const stoptEditingHandler = () => {
    setIsEdeting(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm  
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stoptEditingHandler} 
      />}
    </div>
  );
};

export default NewExpense;