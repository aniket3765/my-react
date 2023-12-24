import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) =>{

    const [title, setTitle] = useState();
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }
    const addExpense = (e) =>{
        e.preventDefault();
        const expenseData = {
            title:title,
            amount:amount,
            date:new Date(date)
        }
      
        setTitle('');
        setAmount('');
        setDate('');
    
        props.onSaveNewExpense(expenseData);
    }

return (
    <div className="ExpenseForm">
        <form onSubmit={addExpense}>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <lable className="new-expense__control label ">Expense Title</lable>
                <input className='new-expense__control input' type='text' value={title} onChange={onChangeTitle}/>
            </div>
            <div className="new-expense__controls">
                <lable>Expense Amount</lable>
                <input type='number' value={amount} onChange={onChangeAmount} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__controls">
                <lable>Expense Date</lable>
                <input type='Date' value={date} onChange={onChangeDate} min="01-01-2023" max="31-12-2023"/>
            </div>
            <div className="new-expense__controls">
                <button type="submit" className='new-expense__actions'>Add Expense</button>
            </div>
            </div>
        </form>
    </div>
);
}

export default ExpenseForm;