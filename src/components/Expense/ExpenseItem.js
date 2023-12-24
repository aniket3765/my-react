import { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseForm'
function ExpenseItem(props) {
    const [Amount , setAmount] = useState(props.Amount);

    const AddAmount = () => {
        setAmount(100);
    }

    const deleteExpense = (e) =>{
        e.target.parentElement.remove()
    }
   
    return (
        <Card className="expense-item">
            <ExpenseDate Date = {props.Date} />
            <div className="expense-item__description">
                <h2>{props.Title}</h2>
                <h2>{props.Location}</h2>
                <div className="expense-item__price">Rs{Amount}</div>
            </div>
            <button onClick={AddAmount}>Add 100.Rs</button>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card>
        );
}

export default ExpenseItem;