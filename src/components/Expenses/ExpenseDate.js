import React from 'react';
import './ExpenseDate.css';

// const timeConverter = (unixTime) => {
//   const timeNow = new Date(unixTime),
//     months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//     year = timeNow.getFullYear(),
//     month = months[timeNow.getMonth()],
//     day = timeNow.getDate();

//   return [year, month, day]
// };

const ExpenseDate = (props) => {
  // const [year, month, day] = timeConverter(props.date);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    year = props.date.getFullYear(),
    month = months[props.date.getMonth()],
    day = props.date.getDate();

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
