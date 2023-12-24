import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () =>{

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

return (
    <div className="ExpenseForm">
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <lable className="new-expense__control label ">Expense Title</lable>
                <input className='new-expense__control input' type='text' onChange={onChangeTitle}/>
            </div>
            <div className="new-expense__controls">
                <lable>Expense Amount</lable>
                <input type='number' min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__controls">
                <lable>Expense Date</lable>
                <input type='Date' min="2023-01-01" max="2023-12-31"/>
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