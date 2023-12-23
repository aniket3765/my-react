import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { findDOMNode } from "react-dom";
function ExpenseItem(props) {

    const deleteExpense = (e) =>{
        console.log(e.target.parentElement.remove())
    }
   
    return (
        <Card className="expense-item">
            <ExpenseDate Date = {props.Date} />
            <div className="expense-item__description">
                <h2>{props.Title}</h2>
                <h2>{props.Location}</h2>
                <div className="expense-item__price">Rs{props.Amount}</div>
            </div>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card>
        );
}

export default ExpenseItem;


// Food Rs 10</li>
//                 <li>Petrol Rs 100</li>
//                 <li>Movies Rs 200</li>
