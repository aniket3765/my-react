import ExpenseItem from "./components/Expense/ExpenseItem"
import ExpenseForm from "./components/Expense/ExpenseForm"
import { useState } from "react"
import Card from "./components/UI/Card"

const data = [
  {
    id:1,
    Date:new Date(2023, 2, 20),
    Title:"Food",
    Amount:10,
    Location:"Mumbai"
},

{
  id:2,
  Date:new Date(2023, 0, 10),
  Title:"petrol",
  Amount:"100",
  Location:"pune"
},

{
  id:3,
  Date:new Date(2024, 1, 20),
  Title:"loan",
  Amount:1000,
  Location:"thane"
},]

const App=()=> {



const [expenses, setExpenses] = useState(data);
let filterData = data;

const newExpenseHandler = (expense) =>{ 
  setExpenses(prevExpenses => {
    filterData = [expense, ...prevExpenses];
    console.log(filterData);
   return [expense, ...prevExpenses];
  })
}
const filteredResult = (e)=> {
  setExpenses(prevExpenses => {
    console.log(data)
  prevExpenses = filterData;
    return prevExpenses;

  })

 if(e.target.value == 2023){
  setExpenses(prevExpenses => {
    console.log(prevExpenses)
    return prevExpenses.filter(d => d.Date.getFullYear()==2023);
  })
 }
 else if(e.target.value == 2024){
  setExpenses(prevExpenses => {
    console.log(prevExpenses)
    return prevExpenses.filter(d => d.Date.getFullYear()==2024);
  })
 }
 else {
  setExpenses(prevExpenses => {
    console.log(prevExpenses)
    return prevExpenses;

  })
 }

}
  
  return ( <div>
      <ExpenseForm onSaveNewExpense={newExpenseHandler}/>
      <Card><select onChange  ={filteredResult}>
        <option value="No filter">No filter</option>
  <option value={2023}>2023</option>
  <option value={2024}>2024</option>
</select >
   {
        expenses.length === 0 ? <p>No expenses available</p>: expenses.map((d) =>{return  (<ExpenseItem 
    key={d.id}
  Title={d.Title}
  Amount={d.Amount}
  Date={d.Date}
  Location={d.Location}
  ></ExpenseItem>
  )
   })}</Card>
    </div>)

}

export default App;
