import './ExpenseList.css'
import ExpenseItem from '../Expenses/ExpenseItem';

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return (<h2 className='expenses-list__fallback'>No expenses found.</h2>);
    }
        
    return (
            <ul> 
            {props.items.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))}
            </ul>);
    
}

export default ExpenseList;