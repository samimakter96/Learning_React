import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem date={new Date(2024, 1, 12)} location="Bangalore" title="Insurance" price="50"></ExpenseItem>
      <ExpenseItem date={new Date(2024, 2, 16)} location="Delhi" title="Book" price="20"></ExpenseItem>
      <ExpenseItem date={new Date(2024, 3, 19)} location="Kolkata" title="Pen" price="5"></ExpenseItem>
      <ExpenseItem date={new Date(2024, 5, 20)} location="Mumbai" title="Laptop" price="1000"></ExpenseItem>
    </div>
  );
}

export default App;
