import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import { useState } from 'react';

const NewExpense = (props) => {
    
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseHandler = (expense) => {
        const newExpense = {
            id: Math.random().toString(),
            ...expense
        }
        props.onAddExpense(newExpense);
        setIsEditing(false);
    } 

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm  onCancel={startEditingHandler} onSaveExpense={saveExpenseHandler}/>}
        </div>
    );
}

export default NewExpense;