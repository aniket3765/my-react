import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
   
    return (
        <div className="expense-item">
            <ExpenseDate Date = {props.Date} />
            <div className="expense-item__description">
                <h2>{props.Title}</h2>
                <h2>{props.Location}</h2>
                <div className="expense-item__price">Rs{props.Amount}</div>
            </div>
        </div>
        );
}

export default ExpenseItem;


// Food Rs 10</li>
//                 <li>Petrol Rs 100</li>
//                 <li>Movies Rs 200</li>
