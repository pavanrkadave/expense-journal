import "./App.css";
import Nav from "./components/Navigation";
import AddBanks from "./components/AddBanks";
import AddExpense from "./components/AddExpense";
import ViewExpense from "./components/ViewExpense";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [banks, setBanks] = useState([]);

  const addExpense = (expenseDescription, expenseAmount, bank) => {
    setExpenses([...expenses, { expenseDescription, expenseAmount, bank }]);
  };

  const addBank = (bankName, balance) => {
    setBanks([...banks, { bankName, balance }]);
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <ViewExpense expenses={expenses} banks={banks} />}
        />
        <Route
          path="/addBanks"
          exact
          render={() => <AddBanks addBank={addBank} />}
        />
        <Route
          path="/addExpense"
          exact
          render={() => <AddExpense addExpense={addExpense} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
