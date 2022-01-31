import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const INITIAL_DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Spotify",
    amount: 19.99,
    date: new Date(2022, 2, 28)
  },
  {
    id: 'e2',
    title: "Netflix",
    amount: 54.99,
    date: new Date(2022, 5, 4)
  },
  {
    id: 'e3',
    title: "HBO Go",
    amount: 19.00,
    date: new Date(2022, 7, 1)
  },
  {
    id: 'e4',
    title: "Car unsurance",
    amount: 19.00,
    date: new Date(2020, 6, 1)
  }
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  }

  console.log(expenses);

  return (
    <div className='App-header'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
