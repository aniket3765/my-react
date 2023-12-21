import ExpenseItem from "./components/ExpenseItem"

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

  
  return ( <div>
      <h2>Let's get started!</h2>
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
