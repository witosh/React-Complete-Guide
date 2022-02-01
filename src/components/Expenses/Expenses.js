import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "../NewExpense/ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2019');

    const filtereChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <li>
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onFiltereChange={filtereChangeHandler} 
            />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
        </li>
    );
}

export default Expenses;