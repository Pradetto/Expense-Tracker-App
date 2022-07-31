import ExpenseItem from "./components/ExpenseItem";

function App() {
  let mike = 4 * 20;
  return (
    <div>
      <h2>Let's get started! ${mike}</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
