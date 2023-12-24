import ExpenseItem from "./components/Expense/ExpenseItem"
import ExpenseForm from "./components/Expense/ExpenseForm"
import { useState } from "react"

const data = [
  {
    id:1,
    Date:new Date(2023, 12, 20),
    Title:"Food",
    Amount:10,
    Location:"Mumbai"
},

{
  id:2,
  Date:new Date(2023, 12, 20),
  Title:"petrol",
  Amount:"100",
  Location:"pune"
},

{
  id:3,
  Date:new Date(2023, 12, 20),
  Title:"loan",
  Amount:1000,
  Location:"thane"
},]

const App=()=> {



const [expenses, setExpenses] = useState(data);

const newExpenseHandler = (expense) =>{
  console.log(expense)
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses]
  })
  // const expenseData = {
  //   ...expense,
  //    id: Math.random().toString()
  // } 
  // console.log('Appjs');
  // console.log(expenseData);
}

console.log(expenses)
  
  return ( <div>
      <ExpenseForm onSaveNewExpense={newExpenseHandler}/>
    {expenses.map((d) =>{return  (<ExpenseItem 
    key={d.id}
  Title={d.Title}
  Amount={d.Amount}
  Date={d.Date}
  Location={d.Location}
  ></ExpenseItem>)
   })}
    </div>)

}

export default App;
