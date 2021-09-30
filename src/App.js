import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import MealDetails from './Components/MealDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/mealDetails">
          <MealDetails></MealDetails>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;