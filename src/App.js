import ExpenseItem from "./components/Expense/ExpenseItem"
import ExpenseForm from "./components/Expense/ExpenseForm"

function App() {
const data = [
  {
    Date:new Date(2023, 12, 20),
    Title:"Food",
    Amount:10,
    Location:"Mumbai"
},

{
  Date:new Date(2023, 12, 20),
  Title:"petrol",
  Amount:"100",
  Location:"pune"
},

{
  Date:new Date(2023, 12, 20),
  Title:"loan",
  Amount:1000,
  Location:"thane"
},]

const newExpenseHandler = (expense) =>{
  const expenseData = {
    ...expense,
    // id: Math.random().toString()
  }
  console.log('Appjs');
  console.log(expenseData);
}
  
  return ( <div>
      <ExpenseForm onSaveNewExpense={newExpenseHandler}/>
    {data.map((d) =>{return  (<ExpenseItem 
  Title={d.Title}
  Amount={d.Amount}
  Date={d.Date}
  Location={d.Location}
  ></ExpenseItem>)
   })}
    </div>)

}

export default App;
