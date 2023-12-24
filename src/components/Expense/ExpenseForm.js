import './ExpenseForm.css'
const addExpense = () =>{

    const onChange = (e) => {
        console.log(e.target.value)
    }

return (
    <div className="ExpenseForm">
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <lable className="new-expense__control label ">Expense Title</lable>
                <input className='new-expense__control input' type='text' onChange={onChange}/>
            </div>
            <div className="new-expense__controls">
                <lable>Expense Amount</lable>
                <input type='number' onChange={onChange} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__controls">
                <lable>Expense Date</lable>
                <input onChange={onChange} type='Date' min="2023-01-01" max="2023-12-31"/>
            </div>
            <div className="new-expense__controls">
                <button type="submit" className='new-expense__actions'>Add Expense</button>
            </div>
            </div>
        </form>
    </div>
);
}

export default addExpense;