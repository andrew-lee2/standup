import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import Home from "./components/Home";
import DataPage from "./components/DataPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/full_data">
            <DataPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;