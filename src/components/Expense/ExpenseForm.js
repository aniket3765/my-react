import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) =>{

    const [title, setTitle] = useState();
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [form, setForm] = useState(false);


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
            id:Math.random().toString(),
            Title:title,
            Amount:amount,
            Date:new Date(date)
        }
      
        setTitle('');
        setAmount('');
        setDate('');
    
        props.onSaveNewExpense(expenseData);
    }

    if(form){

return(
    <div className="ExpenseForm">
      <form onSubmit={addExpense} >
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label className="new-expense__control label ">Expense Title</label>
                <input className='new-expense__control input' type='text' value={title} onChange={onChangeTitle}/>
            </div>
            <div className="new-expense__controls">
                <label>Expense Amount</label>
                <input type='number' value={amount} onChange={onChangeAmount} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__controls">
                <label>Expense Date</label>
                <input type='Date' value={date} onChange={onChangeDate} min="01-01-2023" max="31-12-2023"/>
            </div>
            <div className="new-expense__controls">
                <button type="submit" className='new-expense__actions'>Add Expense</button>
            </div>
            <button type='button' onClick={()=> {setForm(false)}}>Close Form</button>
            </div>
        </form>
        
    </div>
)
}
else {
    return (
    <div className="ExpenseForm">
        <button type='button' onClick={()=> setForm(true)}>Add Expense</button>        
    </div>)
}

}

export default ExpenseForm;